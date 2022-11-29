export default function numberWithDots(numb) {
    return numb.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}