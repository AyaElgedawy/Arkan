import axios from "axios"
import { getVariantsProduct } from "./ProductVariantAcrion";

// const token = localStorage.getItem("token");
const isLoggedIn = () => {
  return !!localStorage.getItem("jwt");
};

export const getCartItems = (user) => async (dispatch) => {
  if (user) {
    const token = localStorage.getItem("jwt");
    const res = await axios.get(`http://127.0.0.1:8000/cart/?user_id=${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({
      type: "SET_CART_ITEMS",
      payload: res.data,
    });
  } else {
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch({
      type: "SET_CART_ITEMS",
      payload: localCart,
    });
  }
};

export const addToCart = (item,user,quantity) => async (dispatch, getState) => {
  const token = localStorage.getItem("jwt");
  console.log("item.product from caer action",item.product);


  const variants = await dispatch(getVariantsProduct(item.product||item.id));
  const currentVariant = await variants.find(
    (searchItem) =>
    searchItem.product == item.product &&
    searchItem.color.id == item.color &&
    searchItem.size.id == item.size
  );

  console.log("variants from caer action",variants);
  console.log("currentVariant from cart action",currentVariant);

  if (user) {
    
    try {
      const res = await axios.get(`http://127.0.0.1:8000/cart/?user_id=${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const userCart = res.data;
      console.log("userCart from cart action",userCart);

      
        const existingItem = await userCart.find(
          (searchItem) =>
          searchItem.product == item.product &&
          searchItem.color == item.color &&
          searchItem.size == item.size
        );
        console.log("existingItem from cart action",existingItem);

          // console.log("variant quantity:",currentVariant.quantity);
        if (existingItem) {
          if(existingItem?.quantity<currentVariant.quantity){
          await axios.patch(
            `http://127.0.0.1:8000/cart/${existingItem.id}`,
            {
              
              quantity: quantity || existingItem.quantity + 1,
              product_variant:currentVariant.id
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        // return null
      }
          // else if((existingItem?.quantity<=variants.quantity)){
          //   return "you exceed the quantities in stock"
          // }
        } else {
          await axios.post(
            "http://127.0.0.1:8000/cart/",
             item,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }
      
    } catch (error) {
      console.log("Error adding cart:", error);
    }

    dispatch(getCartItems(user));
  } else {
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItem = currentCart.find(
        (searchItem) =>
          searchItem.product === item.product &&
          searchItem.color === item.color &&
          searchItem.size === item.size
      );
      if(existingItem){
        if(existingItem?.quantity<currentVariant.quantity){
            existingItem.quantity+=1
          }
      }
      else{
          currentCart.push(item);
      }
    localStorage.setItem("cart", JSON.stringify(currentCart));

    dispatch({
      type: "SET_CART_ITEMS",
      payload: currentCart,
    });
  }
};

export const minusFromCart = (item,user) => async (dispatch, getState) => {
  const token = localStorage.getItem("jwt");
  if (user) {
    
    try {
          if(item.quantity>1){
          await axios.patch(
            `http://127.0.0.1:8000/cart/${item.id}`,
            {
              ...item,
              quantity: item.quantity - 1,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          }
    } catch (error) {
      console.log("Error decreasing cart:", error);
    }

    dispatch(getCartItems(user));
  } else {
          const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
            
            const existingItem = currentCart.find(
        (cartItem) =>
          cartItem.product === item.product &&
          cartItem.color === item.color &&
          cartItem.size === item.size
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(currentCart));

      dispatch({
        type: "SET_CART_ITEMS",
        payload: currentCart,
      });
        }
  
};

export const mergeGuestCartWithUser = (user) => async (dispatch) => {
  const guestCart = JSON.parse(localStorage.getItem("cart")) || [];
  if (!user || guestCart.length === 0) return;
  const token = localStorage.getItem("jwt");

  try {
    const res = await axios.get(`http://127.0.0.1:8000/cart/?user_id=${user.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userCart = res.data;

    for (let guestItem of guestCart) {
      const existingItem = userCart.find(
        (item) =>
          item.product === guestItem.product &&
          item.color === guestItem.color &&
          item.size === guestItem.size
      );

      if (existingItem) {
        await axios.patch(
          `http://127.0.0.1:8000/cart/${existingItem.id}`,
          {
            quantity: existingItem.quantity + 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } else {
        await axios.post(
          "http://127.0.0.1:8000/cart/",
          { ...guestItem, user: user.id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    }

    localStorage.removeItem("cart");

    dispatch(getCartItems(user));
  } catch (error) {
    console.log("Error merging guest cart:", error);
  }

  
};

// export const UpdateToAddToCart = (id,updatedQuantity) => (dispatch) => {
//     return axios.put(`http://127.0.0.1:8000/cart/${id}`,updatedQuantity)
//     .then ((res) =>
//         dispatch({
//         type: "UPDATE_TO_ADD_TO_CART",
//         payload: {id:id,updatedProduct}
//     }))
//     .catch((err) => console.log(err))
    
// }

// export const UpdateToAddToCar = (cartItemId, newQuantity) => (dispatch) => {
//     try {
//         const { data } = axios.patch(`http://127.0.0.1:8000/cart/${cartItemId}`, {
//             quantity: newQuantity  // PATCH only the quantity field
//         });

//         dispatch({ type: 'CART_ITEM_UPDATE', payload: data });

//     } catch (error) {
//         console.error('Failed to update cart item quantity', error);
//     }
// };

export const UpdateToAddToCart = (cartItemId,newQuantity) => async(dispatch) => {
    if(isLoggedIn()){
        const token = localStorage.getItem("jwt");
        const localCart = JSON.parse(localStorage.getItem("cart")) || [];

        await axios.patch(`http://127.0.0.1:8000/cart/${cartItemId}`, {
            quantity: newQuantity  // PATCH only the quantity field
        },
        {headers:{
            Authorization:`Bearer ${token}`,
        }})
        dispatch({
            type: "CART_ITEM_UPDATE",
            payload: localCart
        })
        console.log("update res", localCart);

    } else {
      const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
      currentCart.quantity=newQuantity;
      localStorage.setItem("cart", JSON.stringify(currentCart));
  
      dispatch({
        type: "SET_CART_ITEMS",
        payload: currentCart,
      });
    }
    

    
}

export const removeFromCart = (cartItem,user) => async (dispatch) => {

  if (user) {
    //  لو المستخدم مسجل
    const token = localStorage.getItem("jwt");

    await axios.delete(`http://127.0.0.1:8000/cart/${cartItem.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // بعد الحذف، نجيب الكارت من السيرفر
    dispatch(getCartItems(user));

  } else {
    //  لو ضيف (بيستخدم localStorage)
    const localCart = JSON.parse(localStorage.getItem("cart")) || [];

    // شيل العنصر اللي الـ id بتاعه = cartItemId
    const updatedCart = localCart.filter(item => item.id !== cartItem.id);

    // خزنه من تاني
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // بعت التحديث للـ Redux
    dispatch({
      type: "SET_CART_ITEMS",
      payload: updatedCart,
    });
  }
};


