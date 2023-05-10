import Testi1, { Testi2 } from "./Testi";

const TestiPage = () => {
    const Testisatu =
        "Spanning multiple months, we explored the nuances of analyzing and solving business problems through the lens of a well-prepared case. Enfution has also provided us with a great opportunity to gain a more in-depth understanding of smart technology implementation in business and the digital banking industry. Analyzing industry and business problems, providing relevant solutions, creating an appealing report and pitch deck, and presenting to a panel of judges comprised the journey. The judges in-depth insights were also extremely helpful in assisting us in better understanding the factors that we had overlooked and could optimize on. Furthermore, we are also provided with coaching sessions throughout our journey, which provide valuable guidance in sharpening critical thinking and problem-solving skills for business cases. Overall, the event was an interactive simulation of business problem-solving and a memorable experience";

    const TestiDua =
        "The case, presentation and critical thinking stage, especially Q&A from the judges has been quite challenging and overall have provided the participants with an adequate learning curve through all the competition stages. Goodluck for all of the participants this year!";

    const TestiTiga =
        "DBCC case dan format lombanya menarik dan challenging banget, value utama yang aku dapet sih time management yang baik dan critical thinking bener-bener dibutuhin buat bisa menyelesaikan case ini, especially yang final round.";

    return (
        <div className="container">
            <div className="mt-20">
                <Testi1
                    nama={"Michelle"}
                    pesan={Testisatu}
                    quote={"DBCC was a truly worthwhile experience"}
                    asal={"Pelita Harapan University"}
                    team={"Wonderwork Team"}
                    imageURL={"testiMichael"}
                />
            </div>
            <div className="mt-20">
                <Testi2
                    nama={"Muhammad Ariel Rabbani"}
                    pesan={TestiTiga}
                    quote={"It's a really good experience for me & my team"}
                    asal={"Bina Nusantara University"}
                    team={"Gatot Kaca Team"}
                    imageURL={"manusia1"}
                />
            </div>
            <div className="mt-20">
                <Testi1
                    nama={"Nisrina Tsaniya Khansa Kahfi"}
                    pesan={TestiDua}
                    quote={"DBCC 2022 has been quite a memorable journey!"}
                    asal={"Prasetya Mulya University"}
                    team={"Athena Team"}
                    imageURL={"testiNisrina"}
                />
            </div>
        </div>
    );
};

export default TestiPage;