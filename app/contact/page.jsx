"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
    Select, 
    SelectContent, 
    SelectGroup, 
    SelectItem, 
    SelectLabel, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "+55 (65) 99229-5938",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "geo.xodrom@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Addres",
        description: "Varzea Grande, Mato-Grosso, Residencial Novo mundo, Rua Granada",
    },
];

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0}}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto"> {/* distancia dos itens da borda*/}
                <div className="flex flex-col xl:flex-row gap-[30px]"> {/* distancia dos itens na vertical*/}
                    {/*form */}
                    <div className="xl:h-[54%] order-2 xl:order-none"> {/* No modo de tela smartphone, o form vai para baixo e info fica acima*/}
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"> {/* flex flex-col gap-6 = estilização do item ; p-10 = ordena o item dentro do campo ; bg-[#27272c] = define cor do campo */}
                            <h3 className="text-4xl text-accent"> {/* text-4xl = defini tamanho da fonte ; text-accent = cor da fonte*/} Let's work together</h3>
                            <p className="text-white/60">
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Expedita, iusto, in fuga sunt, quae voluptate.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Fiirstname"/>  {/*Adiciona campo de texto input*/}
                                <Input type="lastname" placeholder="Lastname"/>
                                <Input type="email" placeholder="Email address"/>
                                <Input type="phone" placeholder="Phone"/>
                            </div>
                        </form>
                    </div>
                    {/*info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1
                    xl:order-none mb-8 xl:mb-0"> {/* Aumenta a distancia do item*/}
                        info
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;