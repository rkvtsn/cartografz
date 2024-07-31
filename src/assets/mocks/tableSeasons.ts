import { ISeason } from "../../domain/ISeason";
import { OrderEnum } from "../../domain/OrderEnum";
import { SeasonEnum } from "../../domain/SeasonEnum";

export const MOCK_TABLE_SEASONS: ISeason[] = [
  {
    id: "1season",
    img: "base/seasons/spring.jpg",
    orders: [OrderEnum.A, OrderEnum.B],
    type: SeasonEnum.SPRING,
    capacity: 8,
  },
  {
    id: "2season",
    img: "base/seasons/summer.jpg",
    orders: [OrderEnum.B, OrderEnum.C],
    type: SeasonEnum.SUMMER,
    capacity: 8,
  },
  {
    id: "3season",
    img: "base/seasons/autumn.jpg",
    orders: [OrderEnum.C, OrderEnum.D],
    type: SeasonEnum.AUTUMN,
    capacity: 7,
  },
  {
    id: "4season",
    img: "base/seasons/winter.jpg",
    orders: [OrderEnum.D, OrderEnum.A],
    type: SeasonEnum.WINTER,
    capacity: 6,
  },
];
