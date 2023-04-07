import Button from "./elements/Button";

export const Banner = () => {
    return (
        <div className="banner w-full md:w-2/3 px-7 mx-auto relative flex items-center-justify-between">
            <div className="banner-deescription w-full md:w-1/2 p-3">
                <h2 className="mb-5 text-5xl font-bold text-white">
                   Get Tiffin Service From Your
                   Favorite Restaurants
                </h2>
                <p className="font-semibold text-lg text-white py-4">
                   Indore's First food delivery service which delivers Daily tasty food straight from your favorite Restaurants to your doorstep at an affordable price.
                </p>
                <p className="font-semibold text-lg text-red-600 py-4">
                    Get Started Today!
                </p>
                <div className="btn-container">
                    <Button>Order Now</Button>
                    <a href="/menu" className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3">
                        See  All Restaurants      
                                      </a>
                </div>
            </div>
            <div className="banner-image w-full md:w-1/2 p-5 flex justify-start">
                <img src={require("../assets/images/Buggie.png")} alt="banner" className="max-h-110" />
            </div>
        </div>
    )
}