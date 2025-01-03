"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
    {
        num: '01',
        title: "Web Development",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus perferendis eaque temporibus omnis odio amet expedita.",
        href: ""
    },
    {
        num: '02',
        title: "UI/UX Design",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus perferendis eaque temporibus omnis odio amet expedita.",
        href: ""
    },
    {
        num: '03',
        title: "Logo Design",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus perferendis eaque temporibus omnis odio amet expedita.",
        href: ""
    },
    {
        num: '04',
        title: "SEO",
        description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque voluptatibus perferendis eaque temporibus omnis odio amet expedita.",
        href: ""
    },
];

import { motion } from "framer-motion";

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div initial={{opacity: 0}} 
                animate={{
                    opacity: 1,
                    transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index)=> {
                        return (
                        <div 
                        key={index}
                        className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            {/* top */}
                            <div>
                                <div>{service.num}</div>
                                <Link href={service.href}>
                                    <BsArrowDownRight />
                                </Link>
                            </div>
                            {/*title*/}
                            <h2>{service.title}</h2>
                            {/*description*/}
                            <p>{service.descriptio}</p>
                            {/* border*/}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    );
                    })}
                </motion.div>
            </div>

        </section>
    );
};

export default Services;