import Controller from '@ember/controller';

export default class IndexController extends Controller {
    navLinks = [{
            label: 'Home',
            route: 'index'
        },
        {
            label: 'Brain-Box Trivia',
            route: 'brain-box-trivia'
        },
        {
            label: 'Ask Chat GPT',
            route: 'ask-chat-gpt'
        },
        {
            label: 'Picture Dump',
            route: 'picture-dump'
        },
        // ...
    ];
}