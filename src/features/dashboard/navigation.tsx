import IconLogo from "../assets/images/logo.svg";

export default function Navigation() {
    return (
        <div>
            <div className="flex flex-col justify-center px-5 py-6">
                <img alt="logo" src={IconLogo} className="w-100 h-20-md" />
            </div>
        </div>
    );
}
