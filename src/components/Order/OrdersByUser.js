import React, {useEffect, useState} from "react";
import {getOrdersByUser} from "../../Api/OrderApi";
import {inject, observer} from "mobx-react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {

        margin: "2rem"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 24,
        margin: "2rem"
    },
    pos: {
        marginBottom: 12,
    },
});

function OrderByUser(props) {
    const [orders, setOrders] = useState([])
    const [styles] = useState(useStyles())
    useEffect(() => {
            const fetchOrders = async () => {
                let requestData = await getOrdersByUser(props.userStore.userIdentity.token).then(dane => {
                    console.log(dane)
                    let rq = dane.map(order => {
                        console.log(order)
                        return (
                            <Card className={styles.root} key={order[0]} variant="outlined">
                                <CardContent>

                                    <Typography variant="h5" component="h2">
                                        Data: {order[1]}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Cena : {order[2]}
                                        <br/>
                                        Wysyłka : {order[3]}
                                        <br/>
                                        Metoda platnosci: {order[4]}
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                        Adres
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        Miasto : {order[5]}
                                        <br/>
                                        Ulica : {order[6]}
                                        <br/>
                                    </Typography>
                                </CardContent>
                            </Card>)
                    })
                    return rq
                })
                setOrders(requestData)
            }
            fetchOrders()
        }, []
    )
    return (
        <div>
            <Typography className={styles.title} variant="h1" component="h2" >
                Zamówienia
            </Typography>
            {orders}
        </div>
    )
}

export default inject(stores => ({
    userStore: stores.userStore
}))(observer(OrderByUser))