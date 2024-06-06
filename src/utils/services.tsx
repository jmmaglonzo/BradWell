import { Icon } from "@iconify/react";

export const services = [
  {
    key: "food",
    icon: <Icon icon="mdi:food" width={70} color="F15725" />,
    label: "Food and Beverage Manufacturer",
    desc: "We offer a comprehensive range of ingredients and solutions for food and beverage manufacturers.",
  },
  {
    key: "hotel/resto",
    icon: <Icon icon="material-symbols:food-bank" width={70} color="F15725" />,
    label: "Hotel & Restaurants",
    desc: "Our products and services cater to the unique needs of hotels and restaurants.",
  },
  {
    key: "cleaning",
    icon: (
      <Icon
        icon="material-symbols:cleaning-bucket-rounded"
        width={70}
        color="F15725"
      />
    ),
    label: "Laundry and Cleaning Services / Households Manufacturer",
    desc: "We provide high-quality cleaning ingredients and solutions for laundry services and households.",
  },
  {
    key: "industrial",
    icon: <Icon icon="bxs:gas-pump" width={70} color="F15725" />,
    label: "Industrial ",
    desc: "Our industrial chemicals and raw materials are trusted by various industries.",
  },
];
