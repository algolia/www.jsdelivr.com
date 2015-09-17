export default function (hit, attribute) {
  if (hit._highlightResult && hit._highlightResult[attribute]) {
    return hit._highlightResult[attribute].value;
  }
  return hit[attribute];
}
