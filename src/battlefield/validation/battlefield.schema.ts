import { Static, Type } from "@sinclair/typebox";

const battlefieldTargetSchema = Type.Object({
  coordinates: Type.Object({
    x: Type.Number(),
    y: Type.Number()
  }),
  enemies: Type.Object({
    number: Type.Number(),
    type: Type.String()
  }),
  allies: Type.Optional(
    Type.Number()
  ),
});

export const battlefieldSchema = Type.Object({
  protocols: Type.Array(
    Type.String()
  ),
  scan: Type.Array(
    battlefieldTargetSchema
  )
});

export type BattlefieldSchemaType = Static<typeof battlefieldSchema>; 
export type BattlefieldTargetType = Static<typeof battlefieldTargetSchema>; 
