const ContactBehaviourEdit = {
    add: () => {
        console.warn('Contact::behaviour::add not allowed')
    },
    edit: () => {
        console.info('Contact::behaviour::edit you can')
    },
    delete: () => {
        console.info('Contact::behaviour::delete not allowed')
    }
}

const ContactBehaviourView = {
    add: () => {
        console.warn('Contact::behaviour::add not allowed')
    },
    edit: () => {
        console.info('Contact::behaviour::edit you can')
    },
    delete: () => {
        console.info('Contact::behaviour::delete not allowed')
    }
}


export {ContactBehaviourEdit, ContactBehaviourView}