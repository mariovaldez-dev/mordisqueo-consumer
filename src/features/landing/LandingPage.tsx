import IconLogo from "../../assets/images/logo-dark.svg";
import { Services } from "./Services";

export default function LandingPage() {

  return (
    <div className="bg-light dark:bg-zinc-900 text-dark dark:text-white transition-colors duration-300">
      <section className="h-screen w-full flex items-center justify-center snap-start">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <img alt="logo" src={IconLogo} className="w-100 h-20-md" />
          <h1 className="raleway-normal text-4xl md:text-6xl font-bold mb-4">
            🍿 Eventos llenos de Snacks 🎉
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Carritos de papitas, gomitas y más para tus fiestas y reuniones
          </p>
          <a
            href="/booking"
            className="bg-primary bg-primary text-light px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition"
          >
            Reserva tu carrito
          </a>
        </div>
      </section>

      <Services />

      {/* Contacto */}
      <section className="h-screen w-full flex items-center justify-center snap-start">
        <div className="max-w-lg bg-white dark:bg-zinc-800 shadow-xl rounded-2xl p-8" id="contacto">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Reserva tu evento</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full border dark:border-zinc-700 rounded-lg px-4 py-2 bg-white dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Tu correo"
              className="w-full border dark:border-zinc-700 rounded-lg px-4 py-2 bg-white dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              placeholder="Detalles del evento"
              rows={4}
              className="w-full border dark:border-zinc-700 rounded-lg px-4 py-2 bg-white dark:bg-zinc-700 dark:text-white dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}