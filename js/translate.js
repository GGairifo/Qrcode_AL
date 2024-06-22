// translate.js

// Define translations for different languages
const translations = {
    pt: {
        title: "Serviços de Alojamento Local",
        menuLink: "Menu",
        contactLink: "Contacto",
        welcome_title:"Bem vindo ao nosso Alojamento Local",
        welcome_text: "Estamos muito felizes em recebê-lo. Explore nossos serviços para melhorar sua experiência!",
        service_1_Title: "Serviço de Pequeno-Almoço",
        service_1_Desc: "Delicioso pequeno-almoço servido diretamente no seu quarto. Inclui uma seleção variada de pães, frios, frutas frescas e bebidas quentes.",
        service_1_Price: "Preço por pessoa: €10.",
        service_1_list: "Lista de produtos:",
        service_1_Products: [
            "Dois croissants",
            "Um sumo de fruta natural",
            "Uma chávena de café ou chá",
            "Uma peça de fruta da estação",
            "Uma seleção de queijos e presuntos",
            "Pão fresco e manteiga"
        ],
        //serviço 2
        service_2_Title: "Cesta de Doces da Região de Sintra",
        service_2_Desc: "Uma cesta repleta de delícias locais, como queijadas, travesseiros de Sintra, e outros doces típicos da região.",
        service_2_Price: "Preço: €15.",
        service_2_list: "Lista de produtos:",
        service_2_Products: [
            "Queijadas de Sintra",
            "Travesseiros de Sintra",
            "Bolo de mel",
            "Amêndoas cobertas de chocolate"
        ],
         // Service 3
         service_3_Title: "Prova de Vinhos",
         service_3_Desc: "Desfrute de uma degustação de vinhos locais, incluindo vinhos produzidos nas vinhas de Colares e outras regiões vinícolas próximas.",
         service_3_Price: "Preço por pessoa: €25.",
         // Service 4
         service_4_Title: "Dia de Atividades Surpresa em Sintra",
         service_4_Desc: "Um dia repleto de atividades emocionantes e surpresas pela encantadora cidade de Sintra, incluindo visitas a monumentos históricos e pontos turísticos.",
         service_4_Price: "Preço por pessoa: €50.",
         // Service 5
         service_5_Title: "Limpeza Extra",
         service_5_Desc: "Serviço de limpeza adicional disponível a qualquer momento durante a sua estadia.",
         service_5_Price: "Preço: €20.",
         footerText: "Pagamentos em pessoa ou por MB Way",
         phone: '<strong>Telemóvel:</strong>',
         contact_text_d: 'Olá, o meu nome é Catarina. Sou a responsável pelo nosso Alojamento Local e estou aqui para garantir que a sua estadia seja o mais agradável possível. Se precisar de alguma coisa, não hesite em me contactar. Estou disponível para responder a todas as suas perguntas e fornecer informações sobre nossos serviços e a encantadora região de Sintra. Seja bem-vindo e desfrute da sua estadia!',
        
    },
    en: {
        title: "Local Accommodation Services",
        menuLink: "Menu",
        contactLink: "Contact",
        welcome_title: "Welcome to our Local Accommodation",
        welcome_text: "We are very happy to welcome you. Explore our services to enhance your experience!",
        service_1_Title: "Breakfast Service",
        service_1_Desc: "Delicious breakfast served directly to your room. Includes a varied selection of breads, cold cuts, fresh fruits, and hot beverages.",
        service_1_Price: "Price per person: €10.",
        service_1_list: "Product list:",
        service_1_Products: [
            "Two croissants",
            "One natural fruit juice",
            "One cup of coffee or tea",
            "One piece of seasonal fruit",
            "A selection of cheeses and hams",
            "Fresh bread and butter"
        ],
        service_2_Title: "Sweet Basket from Sintra Region",
        service_2_Desc: "A basket full of local delights such as queijadas (cheesecakes), travesseiros de Sintra (pillow-shaped pastries), and other typical sweets from the region.",
        service_2_Price: "Price: €15.",
        service_2_list: "Product list:",
        service_2_Products: [
            "Queijadas de Sintra (cheesecakes)",
            "Travesseiros de Sintra (Sintra pillows)",
            "Honey cake",
            "Chocolate-covered almonds"
        ],
        service_3_Title: "Wine Tasting",
        service_3_Desc: "Enjoy a tasting of local wines, including wines produced in the vineyards of Colares and other nearby wine regions.",
        service_3_Price: "Price per person: €25.",
        service_4_Title: "Surprise Activities Day in Sintra",
        service_4_Desc: "A day full of exciting activities and surprises in the charming city of Sintra, including visits to historical monuments and tourist spots.",
        service_4_Price: "Price per person: €50.",
        service_5_Title: "Extra Cleaning",
        service_5_Desc: "Additional cleaning service available at any time during your stay.",
        service_5_Price: "Price: €20.",
        footerText: "Payments in person or via MB Way (Portuguese mobile payment system)",
        phone: '<strong>Phone:</strong>',
        contact_text_d: 'Hello, my name is Catarina. I am responsible for our Local Accommodation and I am here to ensure that your stay is as pleasant as possible. If you need anything, please feel free to contact me. I am available to answer all your questions and provide information about our services and the charming region of Sintra. Welcome and enjoy your stay!',
    },
    
    es: {
        title: "Servicios de Alojamiento Local",
        menuLink: "Menú",
        contactLink: "Contacto",
        welcome_title: "Bienvenido a nuestro Alojamiento Local",
        welcome_text: "Estamos muy contentos de darle la bienvenida. ¡Explore nuestros servicios para mejorar su experiencia!",
        service_1_Title: "Servicio de Desayuno",
        service_1_Desc: "Delicioso desayuno servido directamente en su habitación. Incluye una variada selección de panes, embutidos, frutas frescas y bebidas calientes.",
        service_1_Price: "Precio por persona: €10.",
        service_1_list: "Lista de productos:",
        service_1_Products: [
            "Dos croissants",
            "Un zumo natural de frutas",
            "Una taza de café o té",
            "Una pieza de fruta de temporada",
            "Una selección de quesos y jamones",
            "Pan fresco y mantequilla"
        ],
        service_2_Title: "Cesta de Dulces de la Región de Sintra",
        service_2_Desc: "Una cesta llena de delicias locales como queijadas, travesseiros de Sintra y otros dulces típicos de la región.",
        service_2_Price: "Precio: €15.",
        service_2_list: "Lista de productos:",
        service_2_Products: [
            "Queijadas de Sintra",
            "Travesseiros de Sintra",
            "Pastel de miel",
            "Almendras cubiertas de chocolate"
        ],
        service_3_Title: "Cata de Vinos",
        service_3_Desc: "Disfrute de una cata de vinos locales, incluidos los vinos producidos en los viñedos de Colares y otras regiones vinícolas cercanas.",
        service_3_Price: "Precio por persona: €25.",
        service_4_Title: "Día de Actividades Sorpresa en Sintra",
        service_4_Desc: "Un día lleno de actividades emocionantes y sorpresas en la encantadora ciudad de Sintra, incluidas visitas a monumentos históricos y lugares turísticos.",
        service_4_Price: "Precio por persona: €50.",
        service_5_Title: "Limpieza Extra",
        service_5_Desc: "Servicio de limpieza adicional disponible en cualquier momento durante su estancia.",
        service_5_Price: "Precio: €20.",
        footerText: "Pagos en persona o por MB Way",
        phone: '<strong>Teléfono:</strong>',
        contact_text_d: 'Hola, mi nombre es Catarina. Soy la responsable de nuestro Alojamiento Local y estoy aquí para asegurarme de que su estancia sea lo más agradable posible. Si necesita algo, no dude en ponerse en contacto conmigo. Estoy disponible para responder a todas sus preguntas y proporcionar información sobre nuestros servicios y la encantadora región de Sintra. ¡Bienvenido y disfrute de su estancia!',
    }
    ,
    fr: {
        title: "Services d'Hébergement Local",
        menuLink: "Menu",
        contactLink: "Contact",
        welcome_title: "Bienvenue dans notre Hébergement Local",
        welcome_text: "Nous sommes très heureux de vous accueillir. Explorez nos services pour améliorer votre expérience !",
        service_1_Title: "Service de Petit-déjeuner",
        service_1_Desc: "Délicieux petit-déjeuner servi directement dans votre chambre. Comprend une sélection variée de pains, de charcuteries, de fruits frais et de boissons chaudes.",
        service_1_Price: "Prix par personne : 10 €.",
        service_1_list: "Liste des produits :",
        service_1_Products: [
            "Deux croissants",
            "Un jus de fruit naturel",
            "Une tasse de café ou de thé",
            "Un fruit de saison",
            "Une sélection de fromages et de jambons",
            "Pain frais et beurre"
        ],
        service_2_Title: "Panier de Douceurs de la Région de Sintra",
        service_2_Desc: "Un panier rempli de délices locaux tels que les queijadas, les travesseiros de Sintra et d'autres pâtisseries typiques de la région.",
        service_2_Price: "Prix : 15 €.",
        service_2_list: "Liste des produits :",
        service_2_Products: [
            "Queijadas de Sintra",
            "Travesseiros de Sintra",
            "Gâteau au miel",
            "Amandes enrobées de chocolat"
        ],
        service_3_Title: "Dégustation de Vins",
        service_3_Desc: "Profitez d'une dégustation de vins locaux, y compris ceux produits dans les vignobles de Colares et d'autres régions viticoles voisines.",
        service_3_Price: "Prix par personne : 25 €.",
        service_4_Title: "Journée d'Activités Surprise à Sintra",
        service_4_Desc: "Une journée remplie d'activités passionnantes et de surprises dans la charmante ville de Sintra, comprenant des visites de monuments historiques et de sites touristiques.",
        service_4_Price: "Prix par personne : 50 €.",
        service_5_Title: "Nettoyage Supplémentaire",
        service_5_Desc: "Service de nettoyage supplémentaire disponible à tout moment pendant votre séjour.",
        service_5_Price: "Prix : 20 €.",
        footerText: "Paiements en personne ou par MB Way",
        phone: '<strong>Téléphone :</strong>',
        contact_text_d: 'Bonjour, je m\'appelle Catarina. Je suis responsable de notre Hébergement Local et je suis là pour m\'assurer que votre séjour soit le plus agréable possible. Si vous avez besoin de quoi que ce soit, n\'hésitez pas à me contacter. Je suis disponible pour répondre à toutes vos questions et vous fournir des informations sur nos services et la charmante région de Sintra. Bienvenue et profitez de votre séjour !',
    }
    ,
    // Add translations for other elements as needed
};

// Function to translate elements based on selected language
function translatePage() {
    const language = document.getElementById('languageSelect').value;
    const elements = {
        menuLink: document.getElementById('menuLink'),
        contactLink: document.getElementById('contactLink'),
        welcome_title: document.getElementById('welcome_title'),
        welcome_text: document.getElementById('welcome_text'),
        service_1_Title: document.getElementById('service_1_Title'),
        service_1_Desc: document.getElementById('service_1_Desc'),
        service_1_Price: document.getElementById('service_1_Price'),
        service_1_list: document.getElementById('service_1_list'), // Add this line
        service_1_Products: document.getElementById('service_1_Products'), // Add this line
        service_2_Title: document.getElementById('service_2_Title'),
        service_2_Desc: document.getElementById('service_2_Desc'),
        service_2_Price: document.getElementById('service_2_Price'),
        service_2_list: document.getElementById('service_2_list'),
        service_2_Products: document.getElementById('service_2_Products'),
        // Add more elements here based on your HTML structure
        service_3_Title: document.getElementById('service_3_Title'),
        service_3_Desc: document.getElementById('service_3_Desc'),
        service_3_Price: document.getElementById('service_3_Price'),
        //service_3_list: document.getElementById('service_3_list'),
        //service_3_Products: document.getElementById('service_3_Products')
         // Add more elements here based on your HTML structure
         service_4_Title: document.getElementById('service_4_Title'),
         service_4_Desc: document.getElementById('service_4_Desc'),
         service_4_Price: document.getElementById('service_4_Price'),
         //service_3_list: document.getElementById('service_3_list'),
         //service_3_Products: document.getElementById('service_3_Products')
          // Add more elements here based on your HTML structure
        service_5_Title: document.getElementById('service_5_Title'),
        service_5_Desc: document.getElementById('service_5_Desc'),
        service_5_Price: document.getElementById('service_5_Price'),
        //service_3_list: document.getElementById('service_3_list'),
        //service_3_Products: document.getElementById('service_3_Products')
        footerText: document.getElementById('footerText'),
        phone:document.getElementById('phone'),
        contact_text_d: document.getElementById('contact_text_d'),
    };

    // Update each element with its translated content
    for (let key in elements) {
        if (translations[language] && translations[language][key]) {
            // Handle service lists separately to populate the ul
            if (key.endsWith('_Products')) {
                const productsList = translations[language][key];
                const listElement = elements[key];
                listElement.innerHTML = ''; // Clear existing content
                productsList.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item;
                    listElement.appendChild(li);
                });
            } else {
                elements[key].innerHTML = translations[language][key];
            }
        } else {
            // Handle case where translation is missing for a key in a language
            elements[key].textContent = "Translation Not Available";
        }
    }
}

// Set default language on page load
window.onload = translatePage;

