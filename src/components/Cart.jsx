import {
    HStack,
    Heading,
    VStack,
    Button,
    SimpleGrid,
    Divider,
    useToast,
    Text,
    Box,
    Flex,
    RadioGroup,
    Radio,
    Spacer
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FullScreenSection from "../pages/FullScreenSection";
import CartItems from "./CartItems";
import { useScreenSize } from "../context/ScreenSizeContext";
import { Link } from 'react-router-dom';
import useSubmit from "../hooks/useSubmit";
import DeliveryAddress from "./DeliveryAddress"
import Payment from "./Payment";
import { coupons } from "../utils/data";
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { clearCart } from './CartSlice';
const CustomToastDescription = ({ success }) => {
    return (
        <Text fontSize="lg" fontStyle="italic" lineHeight="1.5">
            {success ? (
                <>
                    Your order has been successfully placed!<br />
                    Your food will be delivered in 10 mins.
                </>
            ) : (
                <>
                    There was an error placing your order.<br />
                    Please try again later.
                </>
            )}
        </Text>
    );
};

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const [confirm, setConfirm] = useState(false);
    const { fireConfetti } = useScreenSize();
    const { submit } = useSubmit();
    const toast = useToast();
    const dispatch = useDispatch();
    const [discountPrice, setDiscountPrice] = useState(0);
    const [discountPercentage, setDiscountPercentage] = useState(0);
    const [selectedCoupon, setSelectedCoupon] = useState("0");
    const numOfCoupon = coupons.length > 2 ? 2 : coupons.length;
    const [visibleCoupons, setVisibleCoupons] = useState(numOfCoupon);
    const cartFilter = (items) => items.filter(item => item.quantity !== 0).sort((a, b) => a.id - b.id);
    const calculateTotalPrice = (items) => {
        return items.reduce((total, item) => {
            const price = item.price;
            return total + (price * item.quantity);
        }, 0);
    };
    const cartItems = useSelector(state => state.cart.cartItems);
    const sortedCoupons = coupons.sort((a, b) => {
        // First sort by type
        if (a.type === "exemption" && b.type === "discount") {
            return -1; // a comes before b
        }
        if (a.type === "discount" && b.type === "exemption") {
            return 1; // b comes before a
        }
        // Now sort by value within each type
        if (a.type === "exemption" && b.type === "exemption") {
            return a.price - b.price; // Ascending order for exemptions
        }
        if (a.type === "discount" && b.type === "discount") {
            return b.percentage - a.percentage; // Descending order for discounts
        }
        return 0; // Maintain original order for equal types
    });
    const showMoreCoupons = () => {
        setVisibleCoupons(prev => prev + 5); // Increase the number of visible coupons by 5
    };
    const showLessCoupons = () => {
        setVisibleCoupons(prev => Math.max(prev - 5, 2)); // Decrease by 5 but not below 2
    };
    const setDiscount = (e) => {
        const selectedId = parseInt(e); // Convert the value to an integer
        setSelectedCoupon(selectedId); // Update the selected coupon state

        if (selectedId === 0) {
            // If "Without coupons" is selected
            setDiscountPrice(0);
            setDiscountPercentage(0);
        } else {
            const selectedCoupon = coupons.find(coupon => coupon.id === selectedId);

            if (selectedCoupon) {
                setDiscountPrice(selectedCoupon.price);
                setDiscountPercentage(selectedCoupon.percentage);
            }
        }
    };
    const calculateTotalCount = (items) => items.reduce((total, item) => total + item.quantity, 0);

    const deliveryPrice = (quantity) => quantity * 10 + 12;
    useEffect(() => {
        setTotalPrice(calculateTotalPrice(cartItems));
        setTotalCount(calculateTotalCount(cartItems));
    }, [cartItems]);
    const handleOrderSubmit = async () => {
        const orderDetails = { cartItems, totalPrice, totalCount };
        try {
            setConfirm(false);
            await submit('https://john.com/contactme', orderDetails);
            dispatch(clearCart());
            toast({
                title: <Heading size="md" fontWeight="semibold" lineHeight="1.5">Order Placed.</Heading>,
                description: <CustomToastDescription success />,
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            fireConfetti();
            window.scrollTo(0, 0);
        } catch {
            setConfirm(false);
            toast({
                title: <Heading size="md" fontWeight="semibold" lineHeight="1.5">Order Failed.</Heading>,
                description: <CustomToastDescription />,
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };
    const toggleComfirmForm = () => {
        setConfirm((prev) => !prev);
    };

    const PlaceOrderComfirm = () => {
        return(
            <Flex
            height="100vh"
            alignItems="center"
            justifyContent="center"
            position="fixed" // Fixed positioning to float above other content
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="1000" // Ensure it appears above other content
            backgroundColor="rgba(0, 0, 0, 0.5)" // Semi-transparent backdrop
        >
            <Box
                maxWidth={{ base: '95%', md: '450px' }}
                padding="4rem"
                shadow="rgba(17, 17, 26, 0.1) 0px 4px 16px,
                rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"
                backgroundColor="#FFFFFF"
                borderRadius="2xl"
                position="relative" // Use relative positioning for the box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
                gap="2.5rem"
                letterSpacing="0.5px"
            >
                <VStack width="100%" justifyContent="space-between">
                <Heading size="md" fontWeight="semibold" lineHeight="2" color="#333333">Are You Sure Comfirm Order?</Heading>
                    <HStack width="100%" justifyContent="space-between">
                        <Button onClick={handleOrderSubmit} size="md" colorScheme="yellow" width="30%">
                            <span style={{ color: '#333333' }}>OK</span>
                        </Button>
                        <Button onClick={toggleComfirmForm} size="md" colorScheme="yellow" width="30%">
                            <span style={{ color: '#333333' }}>Cancel</span>
                        </Button>
                    </HStack>
                </VStack>
            </Box>
        </Flex>
        );
    };
    
    return (
        <>
        {confirm ? (
            <PlaceOrderComfirm/>
        ):(null)}
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#FFFFFF"
            minHeight="50vh"
            borderRadius="md"
            width={{ base: "96vw", md: "96vw" }}
        >
            {cartItems.length > 0 ? (
                <>
                    <SimpleGrid columns={{ base: 1, md: 1 }} width="100%">
                        <DeliveryAddress />
                        <Box py={{ base: "0.5rem", md: "0.5rem" }}/>
                        <HStack width="100%" justifyContent="space-between">
                            <Heading size={{base: "md" , md: "lg" }} fontWeight="semibold" color="#333333">
                                Total Items ({cartItems.length})
                            </Heading>
                            <Heading size={{base: "md" , md: "lg" }} fontWeight="semibold" color="#333333" textAlign="right">
                                Price
                            </Heading>
                        </HStack>
                        <Box py={{ base: "0.5rem", md: "0.5rem" }}/>
                        {cartItems.map(food => (
                            <CartItems
                                {...food}
                                key={food.id}
                                imageSrc={food.imageSrc}
                                ingredients={food.ingredients}
                            />
                        ))}
                    </SimpleGrid>
                    <Divider orientation='horizontal' variant="solid" borderColor="#495E57" />
                    <SimpleGrid columns={{ base: 1, md: 1 }} width="100%" >
                        {/* Discount Section */}
                        <Box py={{ base: "0.5rem", md: "0.5rem" }}/>
                        <VStack minWidth="41vw">
                            <Heading size={{base: "md" , md: "lg" }} fontWeight="semibold" color="#333333"alignSelf="start">Discount</Heading>
                            <RadioGroup color="#333333" borderColor="#333333" onChange={(e) => setDiscount(e)} value={selectedCoupon.toString()} width="100%"  >
                                <HStack key={0} width="100%">
                                    <label htmlFor={`coupon-0`}>
                                        <Text fontSize={{ base: "md", md: "lg" }} color="#333333" align="start" width="70vw" lineHeight={{ base: "shorter", md: "short" }}>
                                            Without coupons.
                                        </Text>
                                    </label>
                                    <Spacer />
                                    <Radio id={`coupon-0`} value="0" colorScheme="gray" borderColor="#333333" />
                                </HStack>
                                {sortedCoupons.slice(0, visibleCoupons).map((coupon) => (
                                    <HStack key={coupon.id} width="100%">
                                        <label htmlFor={`coupon-${coupon.id}`}>
                                            <Text fontSize={{ base: "md", md: "lg" }} color="#333333" align="start" width="70vw" lineHeight={{ base: "shorter", md: "short" }}>
                                                {coupon.description} - {coupon.type === "exemption" ? `$${Math.abs(coupon.price)}` : `${coupon.percentage * 100}%`}
                                            </Text>
                                        </label>
                                        <Spacer />
                                        <Radio id={`coupon-${coupon.id}`} value={coupon.id.toString()} colorScheme="gray" borderColor="#333333" />
                                    </HStack>
                                ))}
                            </RadioGroup>
                            {visibleCoupons < coupons.length && (
                                <Button onClick={showMoreCoupons} color="#333333" width="100%" mt={{ base: "0.5rem", md: "0" }}>
                                    Show more coupons<FontAwesomeIcon icon={faChevronDown} color="#333333"/>
                                </Button>
                            )}
                            {visibleCoupons > coupons.length && (
                                <Button onClick={showLessCoupons} color="#333333" width="100%" mt={{ base: "0.5rem", md: "0" }}>
                                    Show less coupons<FontAwesomeIcon icon={faChevronUp} color="#333333"/>
                                </Button>
                            )}
                        </VStack>
                        <Box py={{ base: "0.5rem", md: "0.5rem" }}/>
                        {/* Order Summary */}
                        <VStack minWidth="41vw">
                            <Heading size={{base: "md" , md: "lg" }} fontWeight="semibold" color="#333333"alignSelf="start">Order Summary</Heading>
                            <SimpleGrid columns={2} alignSelf="start" width="100%">
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333" lineHeight={{ base: "shorter", md: "short" }}>Total Price:</Text>
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333" textAlign="right"lineHeight={{ base: "shorter", md: "short" }}>${totalPrice.toFixed(2)}</Text>
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333"lineHeight={{ base: "shorter", md: "short" }}>Delivery Charges:</Text>
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333" textAlign="right"lineHeight={{ base: "shorter", md: "short" }}>${deliveryPrice(totalCount)}</Text>
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333"lineHeight={{ base: "shorter", md: "short" }}>Discount:</Text>
                                <Text fontSize={{ base: "md", md: "lg" }} color="#333333" textAlign="right"lineHeight={{ base: "shorter", md: "short" }}>${((totalPrice + deliveryPrice(totalCount) + discountPrice)*(1-discountPercentage)-totalPrice - deliveryPrice(totalCount)).toFixed(2)}</Text>
                            </SimpleGrid>
                        </VStack>
                        {/* Order Total Section */}
                        <Box py={{ base: "0.5rem", md: "0.5rem" }}/>
                        <VStack minWidth="41vw">
                            <SimpleGrid columns={2} alignSelf="start" width="100%">
                                <Heading size={{base: "md" , md: "lg" }} fontWeight="semibold" color="#333333" alignSelf="start">Order Total:</Heading>
                                <Heading size={{base: "md" , md: "lg" }} fontWeight="semibold" color="#FC2063" textAlign="right">
                                    ${((totalPrice + deliveryPrice(totalCount) + discountPrice)*(1-discountPercentage)).toFixed(2)}
                                </Heading>
                            </SimpleGrid>
                        </VStack>
                        <Box py={{ base: "0.5rem", md: "0.5rem" }}/>
                        <Payment />
                        {/* Place Order Button */}
                        <Box py={{ base: "0.5rem", md: "0.5rem" }}/>
                        <VStack minWidth="41vw">
                            <Button colorScheme="yellow" width="100%" onClick={toggleComfirmForm}>
                                <span style={{ color: '#333333' }}>Place Order</span>
                            </Button>
                        </VStack>
                    </SimpleGrid>
                </>
            ) : (
                <VStack color="#333333" alignSelf="center">
                    <Heading size={{base: "lg" , md: "2xl" }} fontWeight="semibold" color="#495E57">Empty Cart!</Heading>
                    <Link to="/order-online">
                        <Heading size={{base: "md" , md: "lg" }} fontWeight="semibold" color="#FC2063" _hover={{ textDecoration: 'underline', cursor: 'pointer' }}>
                            Click to Order
                        </Heading>
                    </Link>
                </VStack>
            )}
        </FullScreenSection>
        </>
    );
};

export default Cart;