import { useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DialogAlert from "../../shared/components/DialogAlert";
import { useNavigate } from "react-router";

export default function Hero() {
    const navigation = useNavigate();
    const [isDialogBookingOpen] =
        useState<boolean>(false);

    const handleBookingButton = () => {
        navigation('booking')
    };

    return (
        <div className="px-5 mt-8 mb-48 transition-colors duration-300">
            <div className="flex flex-col items-center justify-center">
                <h1 className="xs:text-4xl sm:text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold lg:text-primary dark:text-white text-[hsl(0,0%,8%)] transition-colors duration-300">
                    ¡Reserva con nosotros!
                </h1>
                <div className="flex flex-col items-center">
                    <p className="text-base lg:text-lg my-6 dark:text-white text-[hsl(0,0%,41%)] font-medium text-center transition-colors duration-300">
                        Tenemos todo lo necesario para cubrir tu evento, deleita
                        tu paladar con nuestro inmenso sabor.
                    </p>
                    <p className="text-base my-6 dark:text-white text-[hsl(0,0%,41%)] font-medium text-center transition-colors duration-300">
                        Arma tu paquete como te guste y reserva con
                        anticipación.
                    </p>
                </div>
                <div
                    onClick={handleBookingButton}
                    className="text-white dark:text-black dark:bg-[#F2F2F2] bg-[hsl(0,0%,8%)] dark:hover:bg-pink-500 hover:bg-transparent hover:border hover:text-[hsl(0,0%,8%)] hover:border-[hsl(0,0%,8%)] py-3 px-6 rounded-xl transition-colors duration-300"
                >
                    Reservar
                </div>
            </div>
            {isDialogBookingOpen && (
                <DialogAlert
                    icon={<BsFillInfoCircleFill color="red" />}
                    title="¡Advertencia!"
                    message="Pronto contactaremos con esta opción."
                    onClose={handleBookingButton}
                />
            )}
        </div>
    );
}
