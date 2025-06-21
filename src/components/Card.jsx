import { HStack, Heading, VStack, Text, Image, Button, Flex, Badge } from "@chakra-ui/react";
import { useEffect, useState, } from "react";
import { useNavigate, } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, increaseItemQuantity, decreaseItemQuantity } from './CartSlice';// Action to add product to cart

const Card = ({ id, title, category, type, monthly, ingredients, description, price, imageSrc }) => {
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

    const [newId, setNewId] = useState(generateId(id,ingredients));
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally//cart: createSlice name, cartItems: initialState name
    const item = cartItems.find(item => item.id === newId);
    const handleAddToCart = product => {
      dispatch(addItemToCart(product));// Add product to cart
      console.log("product:",product);
    };
    const handleIncreaseQuantity = itemId => {
      dispatch(increaseItemQuantity(itemId));
      console.log("itemId:",itemId);
    };
    const handleDecreaseQuantity = itemId => {
      dispatch(decreaseItemQuantity(itemId));
      console.log("itemId:",itemId);
    };


    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/order-online/order/${title.replace(/ /g, "")}`, { state: dataToPass });
    };

    useEffect(() => {
        setNewId(generateId(id,ingredients));
    }, [item]);

    function generateId(id, ingredients) {
        const ids = ingredients.map(ingredient => ingredient.id);
        const idMap = [1, 2, 3].filter(x => ids.includes(x)).join('');
        return id * 1000 + (idMap ? parseInt(idMap, 10) : 0);
    }
    return(
        <HStack
            color="#333333"
            backgroundColor="#FFFFFF"
            borderWidth="1px"
            borderRadius="md"
            padding="8px"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
        >
            <VStack alignItems="start" width={{ base: "50vw", md: "50vw" }}>
                <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold" color="#333333" onClick={handleNavigate} cursor="pointer">{title} {category === 'main' && <Badge variant="solid" colorScheme="yellow">main</Badge>}</Heading>
                <Text color="#333333" fontSize={{ base: "md", md: "lg" }} lineHeight={{ base: "shorter", md: "short" }}noOfLines={3} fontStyle="italic">
                    {description}
                </Text>
                <Flex justify="space-between" align="center" width="100%">
                    <Text size={{ base: "md", md: "lg" }} fontWeight="medium" color="#333333">${price}</Text>
                    {item ? (
                        <HStack alignSelf="center" gap={{ base: '5px', md: '8px' }}>
                            <Button onClick={() => handleDecreaseQuantity(newId)} width={{ base: '4px' }}>
                                <FontAwesomeIcon icon={faMinus} color="#333333"/>
                            </Button>
                            <Text color="#333333" fontSize={{ base: 'md', md: 'lg' }}>{item.quantity}</Text>
                            <Button onClick={() => handleIncreaseQuantity(newId)} width={{ base: '4px' }}>
                                <FontAwesomeIcon icon={faPlus} color="#333333"/>
                            </Button>
                        </HStack>
                    ) : (
                        <Button colorScheme="yellow" width="50%" onClick={() =>
                            handleAddToCart({
                            id: newId,
                            key : newId,
                            title: title,
                            category: category,
                            type: type,
                            monthly: monthly,
                            ingredients: ingredients,
                            description: description,
                            price: price,
                            imageSrc: imageSrc,
                        })
                        }><span style={{ color: '#333333' }}>&nbsp;Add +&nbsp;</span></Button>
                    )}
                </Flex>
            </VStack>
            <VStack alignItems="start" width={{ base: "45vw", md: "100%" }}>
                <Image width={{ base: "45vw", md: "100%" }} maxWidth="300px" maxHeight="300px" height={{ base: "45vw", md: "" }} borderRadius="xl" src={imageSrc} alt={title} fit="cover" onClick={handleNavigate} loading="lazy" cursor="pointer"
                    transition="all 0.4s linear"
                    _hover={{
                        transform: "scale(1.04)", bg: "teal.600",
                    }}
                    _active={{
                        transform: "scale(1)",
                    }}
                    draggable="false"
                    />
            </VStack>
        </HStack>

    );
};

export default Card;