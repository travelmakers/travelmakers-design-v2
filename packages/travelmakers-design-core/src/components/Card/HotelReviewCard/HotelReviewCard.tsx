import { PolymorphicRef } from "@travelmakers-design-v2/styles";
import { forwardRef, PropsWithChildren } from "react";
import { View } from "../../View";
import useStyles from "./HotelReviewCard.style";
import {
  HotelReviewCardProps,
  HotelReviewCardComponent,
} from "./HotelReviewCard.type";
import Link from "next/link";
import { Typography } from "../../Typography";
import { Tag } from "../../Tag";
import { Image } from "../../Image";
import { Icon } from "../../Icon";

export interface Props {
  href: string;
  src?: string;
  /** HotelFeatureCard 컴포넌트의 이미지 부분에 표시되는 레이블을 표시합니다. */
  labels?: string[];

  contents: string;

  writer: string;

  product: string;
}

export const HotelReviewCard: HotelReviewCardComponent & {
  displayName?: string;
} = forwardRef(
  <C extends React.ElementType = "div">(
    {
      href = "",
      src,
      labels = [],
      contents,
      writer,
      product,
      className,
      ...props
    }: PropsWithChildren<HotelReviewCardProps<C>>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles();

    return (
      <View<React.ElementType>
        component={"div"}
        ref={ref}
        className={cx(className, classes.container)}
        {...props}
      >
        <Link href={href}>
          <div className={classes.contentContainer}>
            <div className={classes.headerBox}>
              <Typography level="body3" color="primary3">
                이런 점이 좋았어요.
              </Typography>
              <Icon src="IcAngleRight" width={16} height={16} />
            </div>
            {labels.length > 0 && (
              <Tag type="fill" roundness="half" color="gray" gap={4}>
                {labels?.map((label) => (
                  <Tag.Item label={label} />
                ))}
              </Tag>
            )}
            <div className={classes.contentBox}>
              <Typography level="body2" color="primary1">
                {contents}
              </Typography>
              {src && (
                <Image
                  src={src}
                  alt="hotel-review-card"
                  width={40}
                  height={40}
                />
              )}
            </div>
            <div className={classes.divider} />
            <div className={classes.footerBox}>
              <Typography level="body3" color="primary1">
                {writer}
              </Typography>
              <Typography level="body3" color="primary3">
                {product}
              </Typography>
            </div>
          </div>
        </Link>
      </View>
    );
  }
);

HotelReviewCard.displayName = "HotelReviewCard";
