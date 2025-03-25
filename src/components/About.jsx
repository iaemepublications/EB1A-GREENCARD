import HomeNavbar from "./homenavbar"
import LinkedinImg from "../assets/LinkedinImg.avif"
const About = () => {
    return (
        <>
            <HomeNavbar />
            <div class='container  px-40 h-auto bg-gray-100'>
                <p class='font-style: italic text-center mt-10 text-gray-700 leading-7 text-[18px]'>

                    Our team comprises over 30 professionals across the United States, United Kingdom,<br></br> India, Australia, and South Africa.
                </p>
                <div class="relative text-4xl font-semibold pt-3 text-center pb-5">
                    Meet some of our key members
                    <div class="absolute bottom-0  left-1/2 transform -translate-x-1/2 w-8 h-[3px] bg-gray-800"></div>
                </div>

                <div class='flex px-40'>
                    <div class='flex flex-col w-[70%] my-8 space-y-8 leading-8'>
                        <p class='text-start text-md'>
                            Sahil Nyati is dedicated to helping individuals achieve their dreams through the EB1A visa. As a recipient of this prestigious visa himself, Sahil understands the challenges and complexities of the U.S. immigration system. His mission is to simplify the process and provide comprehensive support to talented individuals aiming for EB1A approval.
                        </p>
                        <p class='text-start text-md'>
                            Sahil co-founded Jinee to address the common issues faced by immigrants, such as navigating legal requirements, understanding eligibility criteria, and preparing compelling evidence. With a focus on personalized guidance and leveraging his own experiences, Sahil is committed to making the EB1A visa accessible to those who deserve it, ensuring they have the best chance to succeed in their immigration journey.
                        </p>
                    </div>
                    <div class='w-[25%] ms-2 flex flex-col  justify-center'>
                        <img
                            class='rounded-full object-cover'
                            src={LinkedinImg}
                            style={{
                                borderRadius: '50% / 50%',
                                objectFit: 'cover'
                            }}
                        />
                        <div class='text-center flex flex-col'>
                            <p>Sahil Nyati</p>
                            <p>Founder and Mentor</p>
                            <p>EB1A Recipient</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About