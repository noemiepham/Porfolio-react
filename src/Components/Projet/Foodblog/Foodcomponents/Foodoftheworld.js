import axios from 'axios'
import { useEffect, useState } from 'react';

const Foodoftheworld = () => {

    // Exemple d'API
    /*
    https://www.google.com = site d'entrée de Google
    https://www.google.com/search?q=voiture = recherche par Google d'une voiture

    AMAZON (exemple)
    recherche produit : https://www.amazon.fr/recherche/voiture
    acheter produit : https://www.amazon.fr/achat/{idVoiture}
    créer un compte : https://www.amazon.fr/compte/creer
    se connecter avec son compte : https://www.amazon.fr/compte/login
    réclamer avec remboursement : https://www.amazon.fr/reclamation

    */
    // on gère 2 états : null au départ (rien à afficher), puis quand les données sont disponibles
    const [data, setData] = useState(null)

    useEffect(async () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
        const result = await axios(url)
        setData(result.data)
    }, [])

    return (
        <div className="breakpage">
            <div className="my-recipes">FOOD OF THE WORLD </div>
            <section className="Menuweek-foodworld">
                {data === null ?
                    <div>Recherche des données en cours ...</div>
                    :
                    // Lorsque data est disponible on affiche la liste des plats
                    data.meals.map((plat) => {
                        return (
                            <div>
                                <img className="imagefoodworld" src={plat.strMealThumb} alt=""></img>
                                <div className="Nom du plat">{plat.strMeal}</div>
                            </div>

                        )
                    })
                }
            </section>
        </div>
    )
}
export default Foodoftheworld