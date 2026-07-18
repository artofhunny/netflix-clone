const Footer =()=>{
    return(
        <footer className="bg-black text-gray-300 py-6  lg:pl-16 flex justify-center">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-20">
                {/* <!-- Column 1 --> */}
                    <div className="flex justify-between md:gap-20 mb-2">
                        <div>
                            <h4 class="text-lg font-semibold text-white mb-2">About</h4>
                            <ul class="space-y-1">
                            <li><a href="#" className="hover:text-red-500">Company Info</a></li>
                            <li><a href="#" className="hover:text-red-500">Careers</a></li>
                            <li><a href="#" className="hover:text-red-500">Terms of Use</a></li>
                            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* <!-- Column 2 --> */}
                        <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Help</h4>
                            <ul className="space-y-1">
                            <li><a href="#" className="hover:text-red-500">Help Center</a></li>
                            <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
                            <li><a href="#" className="hover:text-red-500">FAQs</a></li>
                            <li><a href="#" className="hover:text-red-500">Supported Devices</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Column 3 --> */}
                    <div className="">
                        <h4 className="text-lg font-semibold text-white mb-2">Social</h4>
                        <ul className="flex space-x-4">
                        <li><a href="#" className="hover:text-red-500"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#" className="hover:text-red-500"><i className="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#" className="hover:text-red-500"><i className="fab fa-instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                <p className="text-sm">© 2024 Netflix Clone. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;