import Header from "@/components/Header/Header";
import Welcome from "@/components/Welcome/Welcome";
import Rsvp from "@/components/Rsvp/Rsvp";
import Schedule from "@/components/Schedule/Schedule";
import Map from "@/components/Map/Map"
import {Suspense} from "react";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <Welcome/>
                <Suspense>
                    <Rsvp/>
                </Suspense>
                <Schedule/>
                <Map/>
            </main>
        </>
    );
}
