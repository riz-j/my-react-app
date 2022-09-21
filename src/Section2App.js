import Section2Cards from "./Section2Cards";
import Section2Data from "./Section2Data";

export default function Section2App() {
    Section2Data.map(function(item) {
        return (
            item={title: item.title}
        )
    })
}