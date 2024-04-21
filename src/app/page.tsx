import Header from "@/components/Header/Header";
import Welcome from "@/components/Welcome/Welcome";
import Rsvp from "@/components/Rsvp/Rsvp";
import Schedule from "@/components/Schedule/Schedule";
import Map from "@/components/Map/Map"
import AnimatedSVG from "@/components/Anime/Anime";
export default function Home() {
    return (
        <>
            <Header/>

            <main>
                <AnimatedSVG/>
                <Welcome/>
                    <Rsvp/>
                <Schedule/>
                <Map/>
            </main>
        </>
    );
}
