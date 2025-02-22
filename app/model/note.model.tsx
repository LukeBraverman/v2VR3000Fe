export enum NoteOptions {
    WAKE_UP_DO_NOTHING,
    WAKE_UP_THROW_TECH,
    WAKE_UP_DP,
    WAKE_UP_JUMP_VERTICAL,
    WAKE_UP_JUMP_FORWARDS,
    WAKE_UP_JUMP_BACKWARDS,
    WAKE_UP_DRIVE_IMPACT,
    WAKE_UP_DRIVE_REVERSAL,
    WAKE_UP_PARRY,
    WAKE_UP_ATTACK,

    ON_KNOCK_DOWN_NO_ROLL_BACK,
    ON_KNOCK_DOWN_ROLL_BACK,

    JUMP_FORWARDS_INTO_ATTACK,
    JUMP_FORWARDS_INTO_NOTHING,
    JUMP_FORWARDS_INTO_THROW,

    JUMP_VERTICAL_INTO_ATTACK,
    JUMP_VERTICAL_INTO_NOTHING,
    JUMP_VERTICAL_INTO_THROW,

    ANTI_AIR_SUCCESS,
    ANTI_AIR_FAILED,
}

export interface VodNote {
    noteId: string; // Partition Key
    vodId: string;  // Sort Key
    isNoteForOpponent: boolean;
    noteOption: NoteOptions;
    healthOfPlayer: number;
    healthOfOpponent: number;
    description: string;
}
