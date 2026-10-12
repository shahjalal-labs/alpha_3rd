import { createBrowserRouter } from "react-router";
import Root from "./layout/Root";
import AGB from "./pages/AGB";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Datenschutz from "./pages/Datenschutz";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Karriere from "./pages/Karriere";
import Kontakt from "./pages/Kontakt";
import Leistungen from "./pages/Leistungen";
import NotFound from "./pages/NotFound";
import RegionalPage from "./pages/RegionalPage";
import UeberUns from "./pages/UeberUns";
import Widerrufsbelehrung from "./pages/Widerrufsbelehrung";

// Regional SEO - Keywords und Städte
const cities = [
  "Apen",
  "Bad Zwischenahn",
  "Bockhorn",
  "Brake",
  "Butjadingen",
  "Edewecht",
  "Elsfleth",
  "Großenkneten",
  "Hatten",
  "Hude",
  "Jever",
  "Nordenham",
  "Oldenburg",
  "Ovelgönne",
  "Rastede",
  "Sande",
  "Schortens",
  "Stadland",
  "Varel",
  "Wangerland",
  "Wangerooge",
  "Wardenburg",
  "Westerstede",
  "Wiefelstede",
  "Wilhelmshaven",
  "Zetel",
];

const keywords = [
  "immobilienbewertung",
  "hausbewertung",
  "immobiliengutachter",
  "sachverständiger-immobilien",
  "immobiliensachverständiger",
  "verkehrswertgutachten",
  "gutachter-immobilien",
  "kurzgutachten-immobilien",
  "haus-bewerten-lassen",
  "immobilie-bewerten-lassen",
  "wertgutachten-immobilien",
  "immobiliengutachten",
  "grundstücksbewertung",
  "wohnungsbewertung",
  "mehrfamilienhaus-bewerten",
  "gutachten-erbschaft-immobilie",
  "gutachten-scheidung-immobilie",
  "gutachten-zwangsversteigerung",
  "marktwert-immobilie-ermitteln",
  "zertifizierter-sachverständiger",
];

// Generiere alle regionalen Routen
const regionalRoutes = keywords.flatMap((keyword) =>
  cities.map((city) => ({
    path: `${keyword}-${city.toLowerCase().replace(/\s+/g, "-")}`,
    element: <RegionalPage keyword={keyword} city={city} />,
  })),
);

// Uenal Sachverständigenbüro - Router Configuration
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <NotFound />,
    children: [
      { index: true, Component: Home },
      { path: "leistungen", Component: Leistungen },
      { path: "ueber-uns", Component: UeberUns },
      { path: "karriere", Component: Karriere },
      { path: "kontakt", Component: Kontakt },
      { path: "impressum", Component: Impressum },
      { path: "datenschutz", Component: Datenschutz },
      { path: "agb", Component: AGB },
      { path: "widerrufsbelehrung", Component: Widerrufsbelehrung },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },

      // Regionale SEO-Seiten - Dynamisch generiert (520 Seiten)
      ...regionalRoutes,

      { path: "*", Component: NotFound },
    ],
  },
]);
