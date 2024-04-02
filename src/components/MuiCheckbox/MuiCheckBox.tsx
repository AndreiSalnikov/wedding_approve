import React, {SyntheticEvent, useEffect, useState} from 'react';
import {Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup, Radio, RadioGroup} from "@mui/material";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
    addAlcohol,
    approveKid,
    deleteAlcohol,
    getAlcoholStatus,
    getKidStatus
} from "@/utils/firebase";
import Popup from "@/components/Popup/Popup";

interface MuiCheckBoxProps {
    userId: string;
}

const MuiCheckBox: React.FC<MuiCheckBoxProps> = ({userId}) => {
    const [kidStatus, setKidStatus] = useState(false);
    const [alcohol, setAlcohol] = useState({
        'Виски': false,
        'Джин': false,
        'Мартини': false,
        'Водка': false,
        'Коньяк': false,
        'Сухое красное': false,
        'Полусладкое красное': false,
        'Полусухое красное': false,
        'Сладкое красное': false,
        'Сухое белое': false,
        'Полусладкое белое': false,
        'Полусухое белое': false,
        'Сладкое белое': false,
        'Не буду пить': false,
    });
    const [popups, setPopups] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const statusKid = await getKidStatus(userId);
                // @ts-ignore
                setKidStatus(statusKid);
                const statusAlcohol = await getAlcoholStatus(userId);
                if (statusAlcohol !== null) {
                    setAlcohol(prevState => {
                        const newState = {...prevState};
                        for (const key in newState) {
                            if (key in statusAlcohol) {
                                // @ts-ignore
                                newState[key] = statusAlcohol[key];
                            }
                        }
                        return newState;
                    });
                }

            } catch (error) {
                console.error("Error fetching approve status:", error);
            }
        };

        if (userId !== '') {
            fetchData();
        }

    }, []);


    const [showRedWineOptions, setShowRedWineOptions] = useState(false);
    const [showWhiteWineOptions, setShowWhiteWineOptions] = useState(false);

    const handleOptionChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setKidStatus(event.target.value);
        if (event.target.value === 'true') {
            await approveKid({userId, kid: true})
        } else {
            await approveKid({userId, kid: false})
        }
// @ts-ignore
        setPopups(prevPopups => [...prevPopups, true]);

        // After 3 seconds, remove the oldest popup
        setTimeout(() => {
            setPopups(prevPopups => prevPopups.slice(1));
        }, 2000);

    };

    const handelAlcoholChange = async (event: SyntheticEvent<Element, Event>, checked: boolean) => {
        try {
            // @ts-ignore
            const {value, checked} = event.target;

            if (value === 'Красное вино') {
                setShowRedWineOptions(!showRedWineOptions);
            } else {
                if (value === 'Белое вино') {
                    setShowWhiteWineOptions(!showWhiteWineOptions);
                } else {

                    setAlcohol(prevAlcohol => ({
                        ...prevAlcohol,
                        [value]: checked
                    }));

                    if (checked) {
                        await addAlcohol({userId, drink: value});
                        // @ts-ignore
                        setPopups(prevPopups => [...prevPopups, true]);

                        // After 3 seconds, remove the oldest popup
                        setTimeout(() => {
                            setPopups(prevPopups => prevPopups.slice(1));
                        }, 2000);
                    } else {
                        await deleteAlcohol({userId, drink: value})
                        // @ts-ignore
                        setPopups(prevPopups => [...prevPopups, true]);

                        // After 3 seconds, remove the oldest popup
                        setTimeout(() => {
                            setPopups(prevPopups => prevPopups.slice(1));
                        }, 2000);
                    }


                }
            }


        } catch (error) {
            `Ошибка ${error}`
        }
    }

    return (
        <>
            {popups.map((_, index) => (
                <Popup key={index} visible={true} top={30 + index * (80)}/>
            ))}
            <Box className='text-white'>
                <FormControl>
                    <FormLabel style={{color: "#fff"}}>Какой алкоголь вы предпочитаете?</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                               style={{
                                                   borderRadius: '50%',
                                                   color: "#fff",
                                               }}/>}
                            onChange={handelAlcoholChange}
                            checked={alcohol['Виски']}
                            value="Виски"
                            label='Виски'
                        />
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                               style={{
                                                   color: "#fff",
                                               }}/>}
                            onChange={handelAlcoholChange}
                            checked={alcohol['Водка']}
                            value="Водка"
                            label='Водка'
                        />

                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                               style={{
                                                   color: "#fff",
                                               }}/>}
                            onChange={handelAlcoholChange}
                            checked={alcohol['Коньяк']}
                            value="Коньяк"
                            label='Коньяк'
                        />

                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                               style={{
                                                   color: "#fff",
                                               }}/>}
                            onChange={handelAlcoholChange}
                            checked={alcohol['Мартини']}
                            value="Мартини"
                            label='Мартини'
                        />

                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                               style={{
                                                   color: "#fff",
                                               }}/>}
                            onChange={handelAlcoholChange}
                            checked={alcohol['Джин']}
                            value="Джин"
                            label='Джин'
                        />

                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                               style={{
                                                   color: "#fff",
                                               }}/>}
                            onChange={handelAlcoholChange}
                            checked={showRedWineOptions}
                            value="Красное вино"
                            label='Красное вино'
                        />


                        {showRedWineOptions && (
                            <div className='flex flex-col ml-[10px]'>
                                <FormControlLabel
                                    control={<Checkbox icon={<RadioButtonUncheckedIcon/>}
                                                       checkedIcon={<CheckCircleIcon/>} style={{
                                        color: "#fff",
                                    }}/>}
                                    onChange={handelAlcoholChange}
                                    checked={alcohol['Сухое красное']}
                                    value="Сухое красное"
                                    label='Сухое'
                                /> <FormControlLabel
                                control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                                   style={{
                                                       color: "#fff",
                                                   }}/>}
                                onChange={handelAlcoholChange}
                                checked={alcohol['Полусладкое красное']}
                                value="Полусладкое красное"
                                label='Полусладкое'
                            /> <FormControlLabel
                                control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                                   style={{

                                                       color: "#fff",
                                                   }}/>}
                                onChange={handelAlcoholChange}
                                checked={alcohol['Полусухое красное']}
                                value="Полусухое красное"
                                label='Полусухое'
                            /> <FormControlLabel
                                control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                                   style={{
                                                       color: "#fff",
                                                   }}/>}
                                onChange={handelAlcoholChange}
                                checked={alcohol['Сладкое красное']}
                                value="Сладкое красное"
                                label='Сладкое'
                            />
                            </div>
                        )}

                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                               style={{
                                                   color: "#fff",
                                               }}/>}
                            onChange={handelAlcoholChange}
                            checked={showWhiteWineOptions}
                            value="Белое вино"
                            label='Белое вино'
                        />
                        {showWhiteWineOptions && (

                            <div className='flex flex-col ml-[10px]'>


                                <FormControlLabel
                                    control={<Checkbox icon={<RadioButtonUncheckedIcon/>}
                                                       checkedIcon={<CheckCircleIcon/>} style={{
                                        color: "#fff",
                                    }}/>}
                                    onChange={handelAlcoholChange}
                                    checked={alcohol['Сухое белое']}
                                    value="Сухое белое"
                                    label='Сухое'
                                /> <FormControlLabel
                                control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                                   style={{
                                                       color: "#fff",
                                                   }}/>}
                                onChange={handelAlcoholChange}
                                checked={alcohol['Полусладкое белое']}
                                value="Полусладкое белое"
                                label='Полусладкое'
                            /> <FormControlLabel
                                control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                                   style={{
                                                       color: "#fff",
                                                   }}/>}
                                onChange={handelAlcoholChange}
                                checked={alcohol['Полусухое белое']}
                                value="Полусухое белое"
                                label='Полусухое'
                            /> <FormControlLabel
                                control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                                   style={{
                                                       color: "#fff",
                                                   }}/>}
                                onChange={handelAlcoholChange}
                                checked={alcohol['Сладкое белое']}
                                value="Сладкое белое"
                                label='Сладкое'
                            />
                            </div>
                        )}
                        <FormControlLabel
                            control={<Checkbox icon={<RadioButtonUncheckedIcon/>} checkedIcon={<CheckCircleIcon/>}
                                               style={{
                                                   color: "#fff",
                                               }}/>}
                            onChange={handelAlcoholChange}
                            checked={alcohol['Не буду пить']}
                            value="Не буду пить"
                            label='Не буду пить'
                        />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel style={{
                        color: "#fff",
                    }}>Будет ли с вами ребёнок?</FormLabel>
                    <RadioGroup value={kidStatus} onChange={handleOptionChange}>
                        <FormControlLabel style={{
                            color: "#fff",
                        }} value="true" control={<Radio checkedIcon={<CheckCircleIcon/>} style={{
                            color: "#fff",
                        }}/>} label="Да"/>
                        <FormControlLabel style={{
                            color: "#fff",
                        }} value="false" control={<Radio checkedIcon={<CheckCircleIcon/>} style={{
                            color: "#fff",
                        }}/>} label="Нет"/>
                    </RadioGroup>
                </FormControl>
            </Box>
        </>
    );
};

export default MuiCheckBox;
