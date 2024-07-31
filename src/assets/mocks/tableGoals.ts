import { IGoal } from "../../domain/IGoal";
import { OrderEnum } from "../../domain/OrderEnum";

export const MOCK_TABLE_GOALS: IGoal[] = [];

for (let i = 1; i <= 4; i++) {
  for (const order of Object.keys(OrderEnum)) {
    const id = `${order}${i}`;
    MOCK_TABLE_GOALS.push({
      id,
      img: `base/${order}/${id}.jpg`,
      type: order as OrderEnum,
    });
  }
}
