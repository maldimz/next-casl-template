import { Ability, AbilityBuilder } from "@casl/ability"

export const AppAbility = Ability

const defineRulesFor = (role, subject) => {

    const { can, rules } = new AbilityBuilder(AppAbility)
    // set role from Back-end
    if (role === 'ADMIN') {
        can('manage', 'all')
    } else {
        can('read', 'monitoring')
    }

    return rules
}
export const buildAbilityFor = (role, subject) => {
    return new AppAbility(defineRulesFor(role, subject), {
        // https://casl.js.org/v5/en/guide/subject-type-detection
        // @ts-ignore
        detectSubjectType: object => object.type
    })
}

export const defaultACLObj = {
    action: 'manage',
    subject: 'all',
}