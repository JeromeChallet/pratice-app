const product1 = {
  name: "water",
  quantity: 5,
  theme: {
    backgroundColor: "black",
    color: "blue",
  },
};
const product2 = {
  name: "bread",
  quantity: 2,
  theme: {
    backgroundColor: "black",
    color: "white",
  },
};
const product3 = {
  name: "wine",
  quantity: 4,
  theme: {
    backgroundColor: "black",
    color: "red",
  },
};

const waterImage =
  "https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3dhdGVyLXVwZGF0ZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==";
const breadImage =
  "https://www.allrecipes.com/thmb/aF42qMerX6hELzvvO14dC5crXMs=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/6788-amish-white-bread-DDMFS-4x3-6faa1e552bdb4f6eabdd7791e59b3c84.jpg";
const wineImage =
  "https://upload.wikimedia.org/wikipedia/en/c/c0/Red_Wine_Glass.jpg";

function Icon(props, size = 50) {
  return (
    <img
      className="icon"
      src={props.src}
      alt="water icon"
      width={size}
      height={size}
    />
  );
}

export function ListElement() {
  return (
    <>
      <ul>
        <li style={product1.theme}>
          <Icon src={waterImage} />
          Product: {product1.name}, Quantity: {product1.quantity}
        </li>
        <li style={product2.theme}>
          <Icon src={breadImage} />
          Product: {product2.name}, Quantity: {product2.quantity}
        </li>
        <li style={product3.theme}>
          <Icon src={wineImage} />
          Product: {product3.name}, Quantity: {product3.quantity}
        </li>
      </ul>
    </>
  );
}

export default function ProductList() {
  return (
    <>
      <ListElement />
    </>
  );
}
