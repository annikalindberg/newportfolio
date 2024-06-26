import Header from "@/components/header";
import "./globals.css";
import { Nunito } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['300','400', '600', '800'],
 }); 
const metadata = { 
  title: "Annika Lindberg Full Stack developer and Accessibility Consultant | Web Developer Portfolio",
  description: "Annika is a full stack developer, accessibility enthusiast, and a solutions architect. I am based in Stockholm. Over 15 years in accessibility. I specialize in building responsive and SEO-optimized web applications using React JS, Next JS, and Node.js. Programming languages are HTML5, CSS3, Javascript and TypeScript. Experienced in MongoDB, Express, and Mongoose, and agile methodologies. I am a certified web accessibility specialist and a professional birth doula. I am passionate about FemTech and innovation. I am currently working at DAYA Innovation Lab and running my own freelance business as a developer. I am open to new opportunities.",
    image: "/images/og-portfolio.png",
    url: "https:www.annikalindberg-ts.com",
    type: "website",
    
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
 
    <html lang="en" className="!scroll-smooth">
      <metadata>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:image" content={metadata.image} />
        <link rel="icon" href="/favicon.ico" />
     
      </metadata> 
      <body
        className={`${nunito.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-slate-900 dark:text-gray-50 dark:text-opacity-90`}
      >     
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#c4c2d0] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
    </>
  );
}
