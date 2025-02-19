// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { LineCardsData, lineCardsData } from "@/constants/index";
// import { CardHeader, CardTitle, CardContent, Card } from "./ui/card";

// const LineCards = () => {
//   return (
//     <div className="">
//       <div className="container px-5 mx-auto py-10 md:py-20 border-t-2 space-y-10 md:space-y-20">
//         <h2 className="text-2xl md:text-5xl text-center text-primary font-bold">
//           Šlep Purić Čačak
//         </h2>
//         <div className="grid  md:grid-cols-4 text-center gap-6 md:gap-8 items-stretch">
//           {lineCardsData.map((item) => {
//             return <OneCard key={item.id} item={item} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LineCards;

// const OneCard = ({ item }: { item: LineCardsData }) => {
//   return (
//     <motion.div
//       whileInView={{ y: [100, 50, 0], opacity: [0, 0.5, 1] }}
//       transition={{ duration: 0.5 }}
//       whileHover={{
//         scale: 1.05,
//       }}
//       whileTap={{ scale: 0.95 }}
//       className="rounded-xl shadow-2xl shadow-muted-foreground "
//     >
//       <Card className="h-full">
//         <CardHeader>
//           <p className="mx-auto text-7xl text-primary md:pb-5">
//             {<item.icon />}
//           </p>
//           <CardTitle className="text-3xl"> {item.title}</CardTitle>
//         </CardHeader>
//         <CardContent className="text-xl">
//           <p>{item.text}</p>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };
