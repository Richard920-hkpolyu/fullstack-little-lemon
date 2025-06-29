import { HStack, Heading, VStack, Text, Image, Button, SimpleGrid, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { increaseItemQuantity, decreaseItemQuantity } from './CartSlice';// Action to add product to cart

const CartItems = ({ id, title, category, type, monthly, ingredients, description, price, imageSrc }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/order-online/order/${title.replace(/ /g, "")}`, { state: dataToPass });
    };
    const dataToPass = {
        id: id,
        title: title,
        category: category,
        type: type,
        monthly: monthly,
        ingredients: ingredients,
        description: description,
        price: price,
        imageSrc: imageSrc,
    };
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally//cart: createSlice name, cartItems: initialState name
    const item = cartItems.find(item => item.id === id);
    const handleIncreaseQuantity = itemId => {
          dispatch(increaseItemQuantity(itemId));
    };
    const handleDecreaseQuantity = itemId => {
          dispatch(decreaseItemQuantity(itemId));
    };
    const ingredientsNames = ingredients.map(item => item.name).join(', ');
    return (
        <>
        <HStack
            color="#333333"
            backgroundColor="#FFFFFF"
            borderWidth="1px"
            borderRadius="md"
            alignItems="center"
            width="100%"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
            gap="1rem"
        >
            <VStack alignItems="start" width="39vw">
                <Image
                    width={{ base: "35vw", md: "25vw" }}
                    height={{ base: "35vw", md: "25vh" }}
                    borderRadius="xl"
                    alignSelf="start"
                    src={imageSrc}
                    alt={title}
                    fit="cover"
                    loading="lazy"
                    transition="all 0.4s linear"
                    _hover={{ transform: "scale(1.04)", bg: "teal.600" }}
                    _active={{ transform: "scale(1)" }}
                    onClick={handleNavigate}
                    draggable="false"
                    cursor="pointer"
                />
            </VStack>
            <VStack alignItems="start" width="39vw" gap={{ base: "0" }}>
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold" color="#333333" onClick={handleNavigate} cursor="pointer">
                    {title}
                </Heading>
                <Text color="#333333" fontSize={{ base: "md", md: "lg" }} noOfLines={3}>
                    {type}
                </Text>
                <Text color="#333333" fontSize={{ base: "md", md: "lg" }} lineHeight={{ base: "shorter", md: "short" }} noOfLines={3}>
                    {ingredientsNames}
                </Text>
                <SimpleGrid columns={1} spacing={5} alignSelf="start" py={{ base: 0, md: 5 }} width="100%">
                    {item ? (
                        <HStack alignSelf="center" gap={{ base: '5px', md: '8px' }} ml="-10px">
                            <Button onClick={() => handleDecreaseQuantity(id)} width={{ base: '4px' }}>
                                <FontAwesomeIcon icon={faMinus} color="#333333"/>
                            </Button>
                            <Text color="#333333" fontSize={{ base: 'md', md: 'lg' }}>{item.quantity}</Text>
                            <Button onClick={() => handleIncreaseQuantity(id)} width={{ base: '4px' }}>
                                <FontAwesomeIcon icon={faPlus} color="#333333"/>
                            </Button>
                        </HStack>
                    ) : (
                        console.log(`You removed the item ${title}`)
                    )}
                </SimpleGrid>
            </VStack>
            <VStack alignItems="right" width="20vw">
                <Text size={{ base: "md", md: "lg" }} fontWeight="semibold" color="#FC2063" textAlign="right">
                    ${(price * item.quantity).toFixed(2)}
                </Text>
            </VStack>
        </HStack>
        <Box py={{ base: "0.2rem", md: "0.3rem" }}/>
        </>
    );
};

export default CartItems;