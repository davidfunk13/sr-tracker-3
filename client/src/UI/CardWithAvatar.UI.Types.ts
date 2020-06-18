export interface CardWithAvatarOptionalProps {
    // 
}

export interface CardWithAvatarProps extends Partial<CardWithAvatarOptionalProps> {
    avatarLetter: string,
    CardHeaderTitle: string,
    CardHeaderSubtitle: string,
    children: React.ReactNode
}