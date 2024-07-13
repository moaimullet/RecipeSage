import { Prisma } from "@prisma/client";
import { userPublic } from "./userPublic";

/**
 * Provides fields necessary for displaying a summary about a shopping list
 **/
export const shoppingListSummaryWithItems =
  Prisma.validator<Prisma.ShoppingListArgs>()({
    select: {
      id: true,
      userId: true,
      user: userPublic,
      collaboratorUsers: {
        select: {
          user: userPublic,
        },
      },
      title: true,
      createdAt: true,
      updatedAt: true,
      items: {
        select: {
          id: true,
          title: true,
          createdAt: true,
          updatedAt: true,
          user: userPublic,
          recipe: {
            select: {
              id: true,
              title: true,
              ingredients: true,
              recipeImages: {
                select: {
                  image: {
                    select: {
                      id: true,
                      location: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

/**
 * Provides fields necessary for displaying a summary about a shopping list, including items
 **/
export type ShoppingListSummaryWithItems = Prisma.ShoppingListGetPayload<
  typeof shoppingListSummaryWithItems
>;
