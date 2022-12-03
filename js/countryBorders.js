export default function countryBorders(borders) {
    if (borders != null) {
        let spans = '';
        for (let border of borders) {
            spans += `<span>${border}</span>`;
        }
        return spans;
    }
};