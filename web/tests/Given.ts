import { EpicBuilder } from "./builders/EpicBuilder";
import { LehaEmail, LehaName, LehaPhone, UserBuilder, VladEmail, VladName, VladPhone } from "./builders/UserBuilder";

export class Given
{
    Alexey = () => {
        return new UserBuilder('1', LehaName, LehaEmail, LehaPhone)
            .WithAllRoles()
            .Please();
    }
    
    Vlad = (roles: number[]) => {
        return new UserBuilder('2', VladName, VladEmail, VladPhone)
            .WithRoles(roles)
            .Please();
    }

    Epic = (userId: string, epicId: number | null = null) => {
        return new EpicBuilder()
            .WithId(epicId)
            .WithAssignee(userId)
            .WithReporter(userId)
            .Please();
    }
}