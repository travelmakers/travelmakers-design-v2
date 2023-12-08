import { PolymorphicRef } from "@travelmakers/styles";
import React, { forwardRef } from "react";
import { IconTag } from "../Tag";
import { Typography } from "../Typography";
import { View } from "../View";
import useStyles from "./Price.style";
import { PriceProps, ReturnType } from "./Price.type";

export interface Props {
  /** Price 컴포넌트의 타입을 정합니다. */
  type?: "primary" | "secondary";

  /** (secondary type 한정) Price 컴포넌트의 레이블을 표시합니다. */
  label?: string;

  /** Price 컴포넌트의 할인율을 표시합니다. */
  percentText?: number;

  /** Price 컴포넌트의 가격을 표시합니다. */
  priceText?: number;

  /** Price 컴포넌트의 시작가격을 표시합니다. */
  priceStartText?: string;

  couponType?: "tag" | "text";

  disabled?: boolean;

  locale?: "ko" | "en";
}

export const Price = forwardRef(
  <C extends React.ElementType = "div">(
    {
      type = "primary",
      locale = "ko",
      label,
      percentText,
      priceText,
      priceStartText,
      couponType,
      disabled = false,
      className,
      ...props
    }: PriceProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ type });
    const KRW = locale === "ko" ? "원" : "won";

    const Primary = () => {
      return (
        <View<React.ElementType>
          component={"div"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {percentText && (
            <span className={cx(classes.percentText)}>{percentText}%</span>
          )}
          {priceText && (
            <>
              <span className={cx(classes.priceText)}>
                {priceText.toLocaleString("ko")}
              </span>
              <span className={cx(classes.priceBeforeText)}>{KRW}~</span>
            </>
          )}
          {priceStartText && (
            <span className={cx(classes.priceStartText)}>
              | {priceStartText}
            </span>
          )}
        </View>
      );
    };

    const Secondary = () => {
      return (
        <View<React.ElementType>
          component={"div"}
          ref={ref}
          className={cx(classes.root, className)}
          {...props}
        >
          {label && <span className={cx(classes.labelSecondary)}>{label}</span>}
          {priceText && (
            <>
              <span
                className={cx(
                  classes.priceSecondaryText,
                  disabled && classes.priceSecondaryLineThrough
                )}
              >
                {priceText?.toLocaleString("ko")}
                {KRW}
              </span>
            </>
          )}
          {couponType === "tag" && <IconTag label="쿠폰 적용가" type="fill" />}
          {couponType === "text" && (
            <Typography color="secondary1" level="caption" strong>
              {locale === "ko"
                ? "적용 가능한 쿠폰이 있어요!"
                : "There's a coupon for you!"}
            </Typography>
          )}
        </View>
      );
    };

    return type === "primary" ? <Primary /> : <Secondary />;
  }
) as unknown as ReturnType;

Price.displayName = "Price";
