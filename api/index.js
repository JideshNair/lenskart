const coupons = ["SAVE10", "WELCOME20", "FREESHIP", "DISCOUNT25", "HOLIDAY30"];
const usedCoupons = new Set();

export default (req, res) => {
  const availableCoupons = coupons.filter((code) => !usedCoupons.has(code));

  if (availableCoupons.length === 0) {
    res.status(404).json({ error: "No more coupon codes available" });
    return;
  }

  const coupon = availableCoupons[0];
  usedCoupons.add(coupon);

  res.status(200).json({ coupon_code: coupon });
};
