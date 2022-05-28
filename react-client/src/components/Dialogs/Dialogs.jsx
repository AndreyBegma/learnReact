import React from "react";

import styles from './Dialogs.module.css'

const Dialogs = (props) => {

     return(
          <div className={styles.dialogs}>
               <div className={styles.dialogs_item}>
                    <div className={styles.dialog + ' ' + styles.active}>
                         Andrey
                    </div>
                    <div className={styles.dialog}>
                         Maks
                    </div>
               </div>
               <div className={styles.messages}>
                    <div className={styles.message}>
                         Hi!
                    </div>
                    <div className={styles.message}>
                         Wtf!?
                    </div>
               </div>
          </div>
     )
}

export default Dialogs