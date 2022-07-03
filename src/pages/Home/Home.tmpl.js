// language=hbs

export default `
    <ul>
    {{#each this}}
        <li class="list-item"><a href="{{href}}">{{title}}</a></li>
    {{/each}}
    </ul>
`;