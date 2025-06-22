import { HStack, Heading, VStack, Button, Text, Image, useMediaQuery, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import img1 from "../images/Delivery.jpg";
import { Link, useLocation } from 'react-router-dom';
import { DeleteIcon, AddIcon, MinusIcon, ArrowBackIcon } from '@chakra-ui/icons';
import FullScreenSection from "../pages/FullScreenSection";

import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, increaseItemQuantity } from './CartSlice';// Action to add product to cart


const Order = () => {
    const [isMobile] = useMediaQuery("(max-width: 28em)");
    const location = useLocation();
    const { state } = location || {};

    let {
        id = 0,
        title = "Default Title",
        category = "Default Category",
        type = "Default Type",
        monthly = 0,
        ingredients = [],
        description = "Default Description",
        price = 0,
        imageSrc = ""
    } = state || {};
    if(id>1000){
        id=Math.floor(id/1000);
    }
    function generateId(id, ingredients) {
        const ids = ingredients.map(ingredient => ingredient.id);
        const idMap = [1, 2, 3].filter(x => ids.includes(x)).join('');

        return id * 1000 + (idMap ? parseInt(idMap, 10) : 0);
    }
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.cartItems);
    const handleIncrement = () => setCount(prevCount => prevCount + 1);
    const handleDecrement = () => setCount(prevCount => Math.max(prevCount - 1, 1));
    const [addIngredients, setAddIngredients] = useState(ingredients);
    const [count, setCount] = useState(1);
    const [newPrice,setNewPrice] = useState(price);
    const [totalPrice, setTotalPrice] = useState(price);
    const [newId, setNewId] = useState(generateId(id,addIngredients));
    const handleDelete = (ingredientName) => {
        setAddIngredients(prevIngredients =>
            prevIngredients.filter(ingredient => ingredient.name !== ingredientName)
        );
    };
    const handleAddToCart = product => {
          dispatch(addItemToCart(product));// Add product to cart
        };
    const handleIncreaseQuantity = itemId => {
          dispatch(increaseItemQuantity(itemId));
        };

    useEffect(() => {
        setNewId(generateId(id,addIngredients));
        const ingredientsPrice = addIngredients.reduce((total, item) => {
            return total + item.price;
        }, 0);
        const rowIngredientsPrice = ingredients.reduce((total, item) => {
            return total + item.price;
        }, 0);
        // Calculate the total price based on the price of the item and the number of items, minus the ingredients price
        const basePrice = price;
        setNewPrice(basePrice+ingredientsPrice-rowIngredientsPrice);
        setTotalPrice(((count * basePrice) + ingredientsPrice - rowIngredientsPrice).toFixed(2));
    }, [count, addIngredients, price]);

    const addEvent = () => {
        const item = cartItems.find(item => item.id === newId);

        if (item) {
            for (let i = 0; i < count; i++) {
                handleIncreaseQuantity(newId);
            }
        } else {
            handleAddToCart({
                id: newId,
                key: newId,
                title,
                category,
                type,
                monthly,
                ingredients: addIngredients,
                description,
                price: newPrice,
                imageSrc,
            });

            for (let i = 1; i < count; i++) {
                handleIncreaseQuantity(newId);
            }
        }

        setCount(1);
        setAddIngredients(ingredients);
};

    const renderImage = () => (
        <Box paddingTop={{ base: "0", sm: "4rem", md: "2.5rem" }}>
            <Image
                width={{ base: "100vh", md: "42vw" }}
                maxHeight={{ base: "40vh", md: "80vh" }}
                borderRadius="xl"
                src={imageSrc}
                objectFit="cover"
                draggable="false"
            />
        </Box>
    );

    const renderDescription = () => (
        <>
            <Heading size={{ base: "md", md: "lg" }} fontWeight="semibold" color="#333333">{title}</Heading>
            <Text color="#333333" fontSize={{ base: "md", md: "lg" }} fontStyle="italic">{description}</Text>
        </>
    );

    const renderIngredients = () => (
        <VStack alignItems="start" width="100%">
            {addIngredients.map((item, index) => (
                <HStack key={index} width="100%" justifyContent="space-between">
                    <Text color="#333333" fontSize="md" width="10rem">{item.name}</Text>
                    <Text color="#333333" fontSize="md" width="7rem">${item.price.toFixed(2)}</Text>
                    <DeleteIcon onClick={() => handleDelete(item.name)} color="#333333" width={{ base: "5rem", md: "5rem" }} _hover={{ backgroundColor: '#FCF5CF', cursor: 'pointer', borderRadius: 'md' }}/>
                </HStack>
            ))}
        </VStack>
    );
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="start"
            isDarkBackground
            backgroundColor="#FFFFFF"
            py={{ base: 0, md: 12 }}
            minHeight={{ base: '25vh' }}
        >
            <VStack alignItems="left" width="auto" backgroundColor="#FFFFFF">
                {isMobile ? (
                    <HStack>
                        <VStack alignItems="start" width="100%">
                            <Link to="/order-online">
                                <ArrowBackIcon bgColor="#495E57" color="#EDEFEE" w='2.5rem' h='2.5rem' borderRadius="full" />
                            </Link>
                            <VStack alignItems="start" alignSelf="start" width="100%">
                                {renderImage()}
                            </VStack>
                                {renderDescription()}
                            <HStack width="100%">
                                <VStack width="100%" alignItems="start">
                                    <HStack>
                                        <Image src={img1} width='4rem' height='4rem' fit="cover" draggable="false"/>
                                        <Text color="#333333" fontSize="md">Delivery Elasp: 20 minutes</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <br />
                            <Heading size="md" fontWeight="semibold" color="#333333">Add</Heading>
                            {renderIngredients()}
                            <HStack alignSelf="center" gap={10} py={3}>
                                <Button onClick={handleDecrement}><MinusIcon color="#333333" /></Button>
                                <Text color="#333333" fontSize={{ base: "md", md: "lg" }}>{count}</Text>
                                <Button onClick={handleIncrement}><AddIcon color="#333333" /></Button>
                            </HStack>
                            <Button colorScheme="yellow" alignSelf="center" width="full" onClick={addEvent}>
                                Add for ${totalPrice}
                            </Button>
                            <br />
                        </VStack>
                    </HStack>
                ) : (
                    <HStack>
                        <VStack alignItems="start" alignSelf="start" width={{ base: "47vw", md: "42vw" }} px={{ base: 0, md: 10 }}>
                            {renderImage()}
                        </VStack>
                        <VStack alignItems="start" width={{ base: "47vw", md: "40vw" }} px={{ base: 0, md: 10 }}>
                            <Link to="/order-online">
                                <ArrowBackIcon bgColor="#495E57" color="#EDEFEE" w='2.5rem' h='2.5rem' borderRadius="full" />
                            </Link>
                            {renderDescription()}
                            <HStack>
                                <VStack width="100%" alignItems="start">
                                    <HStack>
                                        <Image src={img1} width='3.4rem' height='3.4rem' fit="cover" />
                                        <Text color="#333333" fontSize="md">Delivery Elasp: 20 minutes</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <br />
                            <Heading size="md" fontWeight="semibold" color="#333333">Add</Heading>
                            {renderIngredients()}
                            <HStack alignSelf="center" gap={10} py={3}>
                                <Button onClick={handleDecrement}><MinusIcon color="#333333" /></Button>
                                <Text color="#333333" fontSize={{ base: "md", md: "lg" }}>{count}</Text>
                                <Button onClick={handleIncrement}><AddIcon color="#333333" /></Button>
                            </HStack>
                            <Button colorScheme="yellow" alignSelf="center" width="full" onClick={addEvent}>
                                Add for ${totalPrice}
                            </Button>
                            <br />
                        </VStack>
                    </HStack>
                )}
            </VStack>
        </FullScreenSection>
    );
};

export default Order;