import { useParams } from "react-router-dom";
import BOTWCreaturesDetail from "../page/BOTWCreaturesDetail";
import BOTWEquipmentDetail from "../page/BOTWEquipmentDetail";
import BOTWMaterialDetail from "../page/BOTWMaterialDetail";
import BOTWMonsterDetail from "../page/BOTWMonsterDetail";
import BOTWTreasureDetail from "../page/BOTWTreasureDetail";

function DetailRoute() {

    const { id } = useParams();

    if (id > 0 && id < 84) {
        return <BOTWCreaturesDetail id={id} />
    } else if (id < 165) {
        return <BOTWMonsterDetail id={id} />
    } else if (id < 201) {
        return <BOTWMaterialDetail id={id} />
    } else if (id < 386) {
        return <BOTWEquipmentDetail id={id} />
    } else {
        return <BOTWTreasureDetail id={id} />
    }
}

export default DetailRoute;