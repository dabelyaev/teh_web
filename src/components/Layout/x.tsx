class ShoppingList extends React.Component{
        render()
        {
            return (
                <div className="shopping-list">
                    <h1>Список покупок для {this.props.name}</h1>
                    <ul>
                        <li>Instagramm</li>
                        <li>WhatsApp</li>
                        <li>Oculus</li>
                    </ul>

                </div>
            );
        }
}