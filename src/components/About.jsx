import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-5xl font-medium">We Are Buggie</h2>
                    <br />
                    <p className="text-center font-serif text-xl mt-6 p-5">
                    Taste and Quality have been a constant struggle for everyone who is living away from home. Our team has also faced a similar issue. Buggie was created with a vision to solve this constant food struggle. Our mission is to provide quality food that is good in taste and also affordable.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}