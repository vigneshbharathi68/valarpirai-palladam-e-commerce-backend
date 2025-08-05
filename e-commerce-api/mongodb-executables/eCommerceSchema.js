module.exports = {
  users: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "email", "password_hash", "role", "created_at"],
        properties: {
          name: { bsonType: "string" },
          email: { bsonType: "string" },
          password_hash: { bsonType: "string" },
          phone: { bsonType: "string" },
          role: { bsonType: "string" },
          created_at: { bsonType: "date" },
        },
      },
    },
  },

  addresses: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["user_id", "line1", "city", "state", "country", "zip_code"],
        properties: {
          user_id: { bsonType: "objectId" },
          line1: { bsonType: "string" },
          line2: { bsonType: "string" },
          city: { bsonType: "string" },
          state: { bsonType: "string" },
          country: { bsonType: "string" },
          zip_code: { bsonType: "string" },
          is_default: { bsonType: "bool" },
        },
      },
    },
  },

  categories: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name", "slug"],
        properties: {
          parent_category_id: { bsonType: ["objectId", "null"] },
          name: { bsonType: "string" },
          slug: { bsonType: "string" },
          description: { bsonType: "string" },
        },
      },
    },
  },

  products: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "seller_id",
          "category_id",
          "name",
          "price",
          "stock_quantity",
          "is_active",
          "created_at",
        ],
        properties: {
          seller_id: { bsonType: "objectId" },
          category_id: { bsonType: "objectId" },
          name: { bsonType: "string" },
          description: { bsonType: "string" },
          price: { bsonType: "double" },
          discount_price: { bsonType: ["double", "null"] },
          stock_quantity: { bsonType: "int" },
          is_active: { bsonType: "bool" },
          created_at: { bsonType: "date" },
        },
      },
    },
  },

  product_images: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["product_id", "image_data", "is_primary"],
        properties: {
          product_id: { bsonType: "objectId" },
          image_data: {
            bsonType: "binData",
            description: "Binary image data is required",
          },
          alt_text: { bsonType: "string" },
          is_primary: { bsonType: "bool" },
        },
      },
    },
  },

  product_variants: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["product_id", "variant_name", "sku", "stock_quantity"],
        properties: {
          product_id: { bsonType: "objectId" },
          variant_name: { bsonType: "string" },
          sku: { bsonType: "string" },
          additional_price: { bsonType: ["double", "null"] },
          stock_quantity: { bsonType: "int" },
        },
      },
    },
  },

  carts: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["user_id", "created_at"],
        properties: {
          user_id: { bsonType: "objectId" },
          created_at: { bsonType: "date" },
        },
      },
    },
  },

  cart_items: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["cart_id", "product_id", "quantity"],
        properties: {
          cart_id: { bsonType: "objectId" },
          product_id: { bsonType: "objectId" },
          variant_id: { bsonType: ["objectId", "null"] },
          quantity: { bsonType: "int" },
        },
      },
    },
  },

  orders: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "user_id",
          "address_id",
          "total_amount",
          "status",
          "placed_at",
        ],
        properties: {
          user_id: { bsonType: "objectId" },
          address_id: { bsonType: "objectId" },
          total_amount: { bsonType: "double" },
          status: { bsonType: "string" },
          placed_at: { bsonType: "date" },
          payment_id: { bsonType: ["objectId", "null"] },
        },
      },
    },
  },

  order_items: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["order_id", "product_id", "quantity", "price_at_order"],
        properties: {
          order_id: { bsonType: "objectId" },
          product_id: { bsonType: "objectId" },
          variant_id: { bsonType: ["objectId", "null"] },
          quantity: { bsonType: "int" },
          price_at_order: { bsonType: "double" },
        },
      },
    },
  },

  payments: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: [
          "user_id",
          "order_id",
          "amount",
          "payment_method",
          "payment_status",
        ],
        properties: {
          user_id: { bsonType: "objectId" },
          order_id: { bsonType: "objectId" },
          amount: { bsonType: "double" },
          payment_method: { bsonType: "string" },
          payment_status: { bsonType: "string" },
          transaction_id: { bsonType: "string" },
          paid_at: { bsonType: "date" },
        },
      },
    },
  },

  reviews: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["user_id", "product_id", "rating", "reviewed_at"],
        properties: {
          user_id: { bsonType: "objectId" },
          product_id: { bsonType: "objectId" },
          rating: { bsonType: "int" },
          comment: { bsonType: "string" },
          reviewed_at: { bsonType: "date" },
        },
      },
    },
  },

  wishlist_items: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["user_id", "product_id", "added_at"],
        properties: {
          user_id: { bsonType: "objectId" },
          product_id: { bsonType: "objectId" },
          added_at: { bsonType: "date" },
        },
      },
    },
  },

  shipments: {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["order_id", "tracking_number", "carrier", "status"],
        properties: {
          order_id: { bsonType: "objectId" },
          tracking_number: { bsonType: "string" },
          carrier: { bsonType: "string" },
          status: { bsonType: "string" },
          shipped_at: { bsonType: "date" },
          delivered_at: { bsonType: "date" },
        },
      },
    },
  },
};
