import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

const FormET2 = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="bg-[#FFF9EE] pt-20 w-full min-h-screen text-[#1E2E40]">
                <Head title="Registration -  Early Talk 2" />
                <div className="container pb-32 bg-[#FFF9EE]">
                    <h1 className="text-center font-semibold text-5xl mb-10">
                        Registration Form
                    </h1>
                    <div className="flex justify-center mb-8 w-full">
                        <Link href="/registration-national-seminar">
                            <button className="btn btn-outline w-24 sm:w-60 rounded-none">
                            National Seminar
                            </button>
                        </Link>
                        <Link href="/registration-EarlyTalk1">
                            <button className="btn btn-outline w-24 sm:w-60 rounded-none">
                            Early Talk1
                            </button>
                        </Link>
                        <Link href="/registration-EarlyTalk2">
                            <button className="btn rounded-none bg-[#1E2E40] w-24 sm:w-60">
                            Early Talk 2
                            </button>
                        </Link>
                    </div>

                    <p className="rounded-md border border-[#1E2E40] py-2 text-center italic hidden">
                        Early Bird/Normal Registration
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Full Name{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>

                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Faculty/Department/Batch{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                placeholder="Faculty/Department/Batch"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>

                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Gender <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <div className="flex">
                                <div className="flex my-2 self-center mr-5">
                                    <input
                                        type="radio"
                                        name="radio-1"
                                        className="checkbox mr-3"
                                        onChange={() => {}}
                                    />
                                    <p className="">Male</p>
                                </div>
                                <div className="flex my-2 self-center">
                                    <input
                                        type="radio"
                                        name="radio-1"
                                        className="checkbox mr-3 outline-1 outline-[#1E2E40]"
                                    />
                                    <p className="">Female</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                                Phone Number{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        <div className="md:mx-10 mb-5">
                            <p className="font-semibold">
                                Place, Date of Birth{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                placeholder="Place, DD/MM/YYYY"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>

                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                                Line ID{" "}
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>

                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                                Status<span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                placeholder="Undergraduate/Student/Non-Student"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>


                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                            E-mail 
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>
                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                                University/Institute
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                
                                type="email"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>
                        <div className="mb-5 md:mx-10">
                            <p className="font-semibold">
                            Coupon/Referral Code
                                <span className="text-[#EB9928]">*</span>{" "}
                            </p>
                            <input
                                type="text"
                                placeholder="if any"
                                className="input input-bordered w-full bg-transparent border-[#1E2E40] rounded-md"
                            />
                        </div>
                    </div>

                    <p className="font-semibold md:mx-10">
                        KTM <span className="text-[#EB9928]">*</span>{" "}
                    </p>
                    <p className="text-[#EB9928] mb-2 md:mx-10">
                    
(Only freshmen from Management of Diponegoro University)
                    </p>
                    <div className="grid md:grid-cols-2 md:mr-40 md:ml-10">
                        <input
                            type="file"
                            className="file-input file-input-bordered w-full"
                        />
                    </div>


                    <div className="flex justify-center mt-28">
                        <Link href="/">
                            <button className="btn btn-outline w-28 sm:w-48 rounded-none mx-10">
                                Cancel
                            </button>
                        </Link>
                        <Link href="/payment-confirmation-semnas">
                            <button className="btn w-28 sm:w-48 rounded-none mx-10 bg-[#1E2E40]">
                                Next
                            </button>
                        </Link>
                    </div>
                    <Link href="/">
                        <p className="underline text-center mt-10 font-light">
                            Return to Homepage
                        </p>
                    </Link>
                </div>
            </div>
        </>
    );
};
export default FormET2;