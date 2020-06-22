export interface CardWithAvatarOptionalProps {
    children: React.ReactNode
}

export interface CardWithAvatarProps extends Partial<CardWithAvatarOptionalProps> {
    avatarLetter: string,
    CardHeaderTitle: string,
    CardHeaderSubtitle: string,
}