export const Services = () => {
	const items = [
		{
			name: "Barra de Snacks",
			thumbnail: "/images/snacks.jpg",
		},
		{
			name: "Barra de Esquites",
			thumbnail: "/images/esquites.jpg",
		},
		{
			name: "Barra de Pancakes Minis",
			thumbnail: "/images/pancakes.jpg",
		},
	];
	return (
		<section className="h-screen w-full bg-light dark:bg-zinc-900 flex justify-center snap-start m-2 transition-colors duration-300">
			<div className="max-w-6xl w-full text-center px-6">
				<h2 className="text-5xl raleway-bold mb-6">Nuestros Servicios</h2>

				<div className="grid md:grid-cols-3 gap-6">
					{items.map((item) => (
						<div
							key={item.name}
							className="h-80 w-30 bg-cover bg-center relative flex items-center justify-center rounded-2xl shadow-lg"
							style={{
								backgroundImage: `url(${item.thumbnail})`,
							}}
						>
							<div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
							<div className="text-center text-light px-6">

								<h1 className="text-6xl md:text-3xl raleway-light">
									{item.name}
								</h1>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
