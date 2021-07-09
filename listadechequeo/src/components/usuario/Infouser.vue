<template>
  <div>
    <v-card v-if="info == true">
      <v-container grid-list-md>
        <div>
          <v-toolbar  elevation="4">
            <v-card class="icon">
                <v-icon style="margin-left:30px; margin-top:25px" color="white" x-large="">fas fa-id-card</v-icon>
            </v-card>
            <div class="usuario">LISTA DE CHEQUEO</div>
              <v-spacer></v-spacer>
          </v-toolbar> 
          <v-card-text>
          <v-layout wrap>
                <v-flex xs12 sm4 md4>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="Sistemaoperativo"
                    label="Sistema Operativo"
                    v-model="editedItem.Sistemaoperativo"
                    append-icon="fas fa-laptop-code"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <v-text-field v-model="editedItem.DireccionIP" label="Dirección IP"  append-icon="fas fa-network-wired" :rules="[rules.comas, rules.numeral, rules.llaves1, rules.llaves2, rules.corchetes1, rules.corchetes2]"></v-text-field>
                </v-flex>  
                <v-flex xs12 sm4 md4>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="Tipoequipo"
                    label="Tipo de equipo"
                    v-model="editedItem.Tipodeequipo"
                    append-icon="fas fa-laptop"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <v-dialog
                    ref="dataPicker"
                    v-model="dataPicker"
                    :return-value.sync="editedItem.Fechadeverificacion"
                    persistent
                    lazy
                    full-width
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="editedItem.Fechadeverificacion"
                        label="Fecha de verificación"
                        append-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="editedItem.Fechadeverificacion" scrollable locale="es-co">
                      <v-spacer></v-spacer>
                      <v-btn flat color="primary" @click="dataPicker = false">Cancelar</v-btn>
                      <v-btn
                        flat
                        color="primary"
                        @click="$refs.dataPicker.save(editedItem.Fechadeverificacion)"
                      >OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-flex>   
                <v-flex xs12 sm4 md4>
                  <v-text-field v-model="editedItem.ActivofijoCPU" label="Activo fijo CPU/Portatil/Todo en uno" append-icon="fas fa-laptop" :rules="[rules.puntos, rules.comas, rules.numeral, rules.llaves1, rules.llaves2, rules.corchetes1, rules.corchetes2, rules.maximo]"></v-text-field>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <v-text-field v-model="editedItem.ActivofijoMonitor" label="Activo fijo Monitor"  append-icon="fas fa-desktop" :rules="[rules.puntos, rules.comas, rules.numeral, rules.llaves1, rules.llaves2, rules.corchetes1, rules.corchetes2, rules.maximo]"></v-text-field>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <v-text-field v-model="editedItem.ActivofijoImpresora" label="Activo fijo Impresora"  append-icon="fas fa-print" :rules="[rules.puntos, rules.comas, rules.numeral, rules.llaves1, rules.llaves2, rules.corchetes1, rules.corchetes2, rules.maximo]"></v-text-field>
                </v-flex>  
                <v-flex xs12 sm4 md4>
                  <v-text-field v-model="editedItem.ActivofijoTelefono" label="Activo fijo Telefono"  append-icon="fas fa-mobile" :rules="[rules.puntos, rules.comas, rules.numeral, rules.llaves1, rules.llaves2, rules.corchetes1, rules.corchetes2, rules.maximo]"></v-text-field>
                </v-flex> 
                <v-flex xs12 sm4 md4>
                  <v-text-field v-model="editedItem.ActivoAcanner" label="Activo Acanner"  append-icon="fas fa-barcode" :rules="[rules.puntos, rules.comas, rules.numeral, rules.llaves1, rules.llaves2, rules.corchetes1, rules.corchetes2, rules.maximo]"></v-text-field>
                </v-flex> 
                <v-flex xs12 sm4 md4>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se encuentra Microsoft Office activo?"
                    v-model="editedItem.SeencuentraMicrosoftOfficeactivo"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo tiene 7zip Instalado?"
                    v-model="editedItem.Elequipotiene7zipInstalado"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm4 md4>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo tiene bloqueo BIOS?"
                    v-model="editedItem.ElequipotienebloqueoBIOS"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo se encuentra conectado a la energia regulada?"
                    v-model="editedItem.Elequiposeencuentraconectadoalaenergiaregulada"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se valida que el nombre del equipo corresponda al cargo y área?"
                    v-model="editedItem.ValidarnombredelEquipoquecorrespondaalcargoyarea"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo tiene segunda partición en el disco duro?"
                    v-model="editedItem.Elequipotienesegundaparticipacioneneldiscoduro"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo tiene antivirus instalado en la segunda partición?"
                    v-model="editedItem.Elequipotieneantivirusinstaladoenlasegundaparticipacion"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo tiene Booteables de medios extraibles activos?"
                    v-model="editedItem.ElequipotieneBooteablesdemediosextraiblesactivos"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Equipo tiene temporales guardados?"
                    v-model="editedItem.Equipotienetemporalesguardados"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo entre en suspensión por inactividad en 3 minutos?"
                    v-model="editedItem.ElequipoentraensuspensionporInactividaden3minutos"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo cuenta con bloqueo de puertos USB-CD?"
                    v-model="editedItem.ElequipocuentaconbloqueodepuertosUSBCD"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se realiza cambio de contraseña de ingreso al equipo?"
                    v-model="editedItem.Serealizacambiodecontrasenadeingresoalequipo"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se evidencia Escritorio limpio?"
                    v-model="editedItem.SeevidenciaEscritoriolimpio"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se evidencia Pantalla Limpia?"
                    v-model="editedItem.SeevidenciaPantallaLimpia"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se realiza cambio de contraseña de ingreso a carpeta compartida?"
                    v-model="editedItem.Serealizacambiodecontrasenadeingresoacarpetacompartida"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm12 md12>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Cuenta con uso de llaves criptográficas y estas son resguardadas en un lugar seguro(Cajón con llave)?"
                    v-model="editedItem.CuentaconusodellavescriptograficasyestassonresguardadasenunlugarseguroCajonconllave"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Conoce las opciones de bloqueo del equipo al ausentarse?"
                    v-model="editedItem.Conocelasopcionesdebloqueodelequipoalausentarse"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo se encuentra actualizado a la ultima versión de antivirus?"
                    v-model="editedItem.Elequiposeencuentraactualizadoalaultimaversiondeantivirus"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se encuentra actualizado el sistema operativo?"
                    v-model="editedItem.Seencuentraactualizadoelsistemaoperativo"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo se apaga automáticamente al finalizar jornada?"
                    v-model="editedItem.Elequiposeapagaautomaticamentealfinalizarlajornada"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se encuentra configurado el fondo de pantalla?"
                    v-model="editedItem.Seencuentraconfiguradoalfondodepantalla"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se encuentra activo el boot para restablecer escritorio?"
                    v-model="editedItem.Seencuentraactivoelbootpararestablecerelescritorio"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Se presentaron cambios de hardware o software en el trimestre?"
                    v-model="editedItem.Sepresentaroncambiosdehardwareosoftwareeneltrimestre"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo cuenta con acceso a páginas de redes sociales?"
                    v-model="editedItem.Elequipocuentaconaccesoapaginasderedessociales"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm5 md5>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿El equipo tiene configuración proxy?"
                    v-model="editedItem.Elequipotieneconfiguracionproxy"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm7 md7>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Tiene claro donde consultar la informacion que aplica a la norma 27001?"
                    v-model="editedItem.Tieneclarodondeconsultarlainformacionqueaplicaalanorma27001"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm7 md7>
                  <v-select
                    item-value="name"
                    item-text="name"
                    :items="activo"
                    label="¿Sabe usted como reportar incidentes de seguridad de la información?"
                    v-model="editedItem.Sabeustedcomoreportarincidentesdeseguridaddelainformacion"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm5 md5>
                  <v-text-field v-model="editedItem.CargoResponsable" label="Cargo/Responsable"  append-icon="fas fa-user" :rules="[rules.puntos, rules.comas, rules.numeral, rules.llaves1, rules.llaves2, rules.corchetes1, rules.corchetes2]"></v-text-field>
                </v-flex> 
              </v-layout>
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black darken-1" class="secondary" flat @click="info = false">Cancelar</v-btn>
            <v-btn
              color="black darken-1"
              class="secondary"
              flat
              @click="save"
              
            >Guardar</v-btn>
          </v-card-actions>
            
        </div>

        <v-snackbar
          v-model="snackbar"
          :bottom="y === 'bottom'"
          :left="x === 'left'"
          :multi-line="mode === 'multi-line'"
          :right="x === 'right'"
          :timeout="timeout"
          :top="y === 'top'"
          :vertical="mode === 'vertical'"
          color="primary"
          style="color:white"
        >
          {{ text }}
          <v-btn color="secundary" flat @click="snackbar = false">Cerrar</v-btn>
        </v-snackbar>
        
      </v-container>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import env from "../env";
export default {
  data() {
    return {
      snackbar: false,
      y: "top",
      x: null,
      mode: "",
      timeout: 6000,
      text: "",
     dataPicker: false, 
     dataPicker2: false,
     dataPicker3: false,
     info: true,

     rules: {
         puntos: value => value.indexOf(".")  === -1 || 'Eliminar los " . "',
         comas: value => value.indexOf(",")  === -1 || 'Eliminar los " , "',
         numeral: value => value.indexOf("#")  === -1 || 'Eliminar los " # "',
         llaves1: value => value.indexOf("{")  === -1 || 'Eliminar los " { "',
         llaves2: value => value.indexOf("}")  === -1 || 'Eliminar los " } "',
         corchetes1: value => value.indexOf("[")  === -1 || 'Eliminar los " [ "',
         corchetes2: value => value.indexOf("]")  === -1 || 'Eliminar los " ] "',
         minimo: value =>value.length >= 7 || 'Minimo 7 characteres" ] "',
         maximo: value => value.length <= 4 || 'Maximo 4 characteres',
         
       },

      Sistemaoperativo:[
       {
         name:"Windows 7"
       },
       {
         name:"Windows 8"
       },
       {
         name:"Windows 10"
       },
       {
         name:"Linux"
       },
     ],

     Tipoequipo:[
       {name:"Portatil"},
       {name:"Escritorio"},
       {name:"Todo en uno"},
       ],

     activo:[
       {
         name:"SI"
       },
       {
         name:"NO"
       },
     ],

     editedItem: {
        id: "",
        Sitsemaoperativo: "",
        DireccionIP: "",
        Tipodeequipo: "",
        Fechadeverificacion: "",
        ActivofijoCPU: "",
        ActivofijoMonitor: "",
        ActivofijoImpresora: "",
        ActivofijoTelefono: "",
        ActivoAcanner: "",
        SeencuentraMicrosoftOfficeactivo: "",
        Elequipotiene7zipInstalado:"",
        Elequiposeencuentraconectadoalaenergiaregulada:"",
        ValidarnombredelEquipoquecorrespondaalcargoyarea:"",
        Elequipotienesegundaparticipacioneneldiscoduro:"",
        Elequipotieneantivirusinstaladoenlasegundaparticipacion:"",
        ElequipotienebloqueoBIOS:"",
        ElequipotieneBooteablesdemediosextraiblesactivos:"",
        Equipotienetemporalesguardados:"",
        ElequipoentraensuspensionporInactividaden3minutos:"",
        ElequipocuentaconbloqueodepuertosUSBCD:"",
        Serealizacambiodecontrasenadeingresoalequipo:"",
        SeevidenciaEscritoriolimpio:"",
        SeevidenciaPantallaLimpia:"",
        Serealizacambiodecontrasenadeingresoacarpetacompartida:"",
        CuentaconusodellavescriptograficasyestassonresguardadasenunlugarseguroCajonconllave:"",
        Conocelasopcionesdebloqueodelequipoalausentarse:"",
        Elequiposeencuentraactualizadoalaultimaversiondeantivirus:"",
        Seencuentraactualizadoelsistemaoperativo:"",
        Elequiposeapagaautomaticamentealfinalizarlajornada:"",
        Seencuentraconfiguradoalfondodepantalla:"",
        Seencuentraactivoelbootpararestablecerelescritorio:"",
        Sepresentaroncambiosdehardwareosoftwareeneltrimestre:"",
        Elequipocuentaconaccesoapaginasderedessociales:"",
        Elequipotieneconfiguracionproxy:"",
        Tieneclarodondeconsultarlainformacionqueaplicaalanorma27001:"",
        Sabeustedcomoreportarincidentesdeseguridaddelainformacion:"",
        CargoResponsable:"",
      },
      defaultItem: {
        id: "",
        Sistemaoperativo: "",
        DireccionIP: "",
        Tipodeequipo: "",
        Fechadeverificacion: "",
        ActivofijoCPU: "",
        ActivofijoMonitor: "",
        ActivofijoImpresora: "",
        ActivofijoTelefono: "",
        ActivoAcanner: "",
        SeencuentraMicrosoftOfficeactivo: "",
        Elequipotiene7zipInstalado:"",
        Elequiposeencuentraconectadoalaenergiaregulada:"",
        ValidarnombredelEquipoquecorrespondaalcargoyarea:"",
        Elequipotienesegundaparticipacioneneldiscoduro:"",
        Elequipotieneantivirusinstaladoenlasegundaparticipacion:"",
        ElequipotienebloqueoBIOS:"",
        ElequipotieneBooteablesdemediosextraiblesactivos:"",
        Equipotienetemporalesguardados:"",
        ElequipoentraensuspensionporInactividaden3minutos:"",
        ElequipocuentaconbloqueodepuertosUSBCD:"",
        Serealizacambiodecontrasenadeingresoalequipo:"",
        SeevidenciaEscritoriolimpio:"",
        SeevidenciaPantallaLimpia:"",
        Serealizacambiodecontrasenadeingresoacarpetacompartida:"",
        CuentaconusodellavescriptograficasyestassonresguardadasenunlugarseguroCajonconllave:"",
        Conocelasopcionesdebloqueodelequipoalausentarse:"",
        Elequiposeencuentraactualizadoalaultimaversiondeantivirus:"",
        Seencuentraactualizadoelsistemaoperativo:"",
        Elequiposeapagaautomaticamentealfinalizarlajornada:"",
        Seencuentraconfiguradoalfondodepantalla:"",
        Seencuentraactivoelbootpararestablecerelescritorio:"",
        Sepresentaroncambiosdehardwareosoftwareeneltrimestre:"",
        Elequipocuentaconaccesoapaginasderedessociales:"",
        Elequipotieneconfiguracionproxy:"",
        Tieneclarodondeconsultarlainformacionqueaplicaalanorma27001:"",
        Sabeustedcomoreportarincidentesdeseguridaddelainformacion:"",
        CargoResponsable:"", 
      },
     editedItem2:{
         cedula: "",
     },
     defaultItem2:{
        cedula: "",
     },
     usuario:[]
    };
  },
  methods:{

    save() {
        const info = JSON.stringify({
          Sistemaoperativo: this.editedItem.Sistemaoperativo,
          DireccionIP: this.editedItem.DireccionIP,
          Tipodeequipo: this.editedItem.Tipodeequipo,
          Fechadeverificacion: this.editedItem.Fechadeverificacion,
          ActivofijoCPU: this.editedItem.ActivofijoCPU,
          ActivofijoMonitor: this.editedItem.ActivofijoMonitor,
          ActivofijoImpresora: this.editedItem.ActivofijoImpresora,
          ActivofijoTelefono: this.editedItem.ActivofijoTelefono,
          ActivoAcanner: this.editedItem.ActivoAcanner,
          SeencuentraMicrosoftOfficeactivo: this.editedItem.SeencuentraMicrosoftOfficeactivo,
          Elequipotiene7zipInstalado:this.editedItem.Elequipotiene7zipInstalado,
          Elequiposeencuentraconectadoalaenergiaregulada:this.editedItem.Elequiposeencuentraconectadoalaenergiaregulada,
          ValidarnombredelEquipoquecorrespondaalcargoyarea:this.editedItem.ValidarnombredelEquipoquecorrespondaalcargoyarea,
          Elequipotienesegundaparticipacioneneldiscoduro:this.editedItem.Elequipotienesegundaparticipacioneneldiscoduro,
          Elequipotieneantivirusinstaladoenlasegundaparticipacion:this.editedItem.Elequipotieneantivirusinstaladoenlasegundaparticipacion,
          ElequipotienebloqueoBIOS:this.editedItem.ElequipotienebloqueoBIOS,
          ElequipotieneBooteablesdemediosextraiblesactivos:this.editedItem.ElequipotieneBooteablesdemediosextraiblesactivos,
          Equipotienetemporalesguardados:this.editedItem.Equipotienetemporalesguardados,
          ElequipoentraensuspensionporInactividaden3minutos:this.editedItem.ElequipoentraensuspensionporInactividaden3minutos,
          ElequipocuentaconbloqueodepuertosUSBCD:this.editedItem.ElequipocuentaconbloqueodepuertosUSBCD,
          Serealizacambiodecontrasenadeingresoalequipo:this.editedItem.Serealizacambiodecontrasenadeingresoalequipo,
          SeevidenciaEscritoriolimpio:this.editedItem.SeevidenciaEscritoriolimpio,
          SeevidenciaPantallaLimpia:this.editedItem.SeevidenciaPantallaLimpia,
          Serealizacambiodecontrasenadeingresoacarpetacompartida:this.editedItem.Serealizacambiodecontrasenadeingresoacarpetacompartida,
          CuentaconusodellavescriptograficasyestassonresguardadasenunlugarseguroCajonconllave:this.editedItem.CuentaconusodellavescriptograficasyestassonresguardadasenunlugarseguroCajonconllave,
          Conocelasopcionesdebloqueodelequipoalausentarse:this.editedItem.Conocelasopcionesdebloqueodelequipoalausentarse,
          Elequiposeencuentraactualizadoalaultimaversiondeantivirus:this.editedItem.Elequiposeencuentraactualizadoalaultimaversiondeantivirus,
          Seencuentraactualizadoelsistemaoperativo:this.editedItem.Seencuentraactualizadoelsistemaoperativo,
          Elequiposeapagaautomaticamentealfinalizarlajornada:this.editedItem.Elequiposeapagaautomaticamentealfinalizarlajornada,
          Seencuentraconfiguradoalfondodepantalla:this.editedItem.Seencuentraconfiguradoalfondodepantalla,
          Seencuentraactivoelbootpararestablecerelescritorio:this.editedItem.Seencuentraactivoelbootpararestablecerelescritorio,
          Sepresentaroncambiosdehardwareosoftwareeneltrimestre:this.editedItem.Sepresentaroncambiosdehardwareosoftwareeneltrimestre,
          Elequipocuentaconaccesoapaginasderedessociales:this.editedItem.Elequipocuentaconaccesoapaginasderedessociales,
          Elequipotieneconfiguracionproxy:this.editedItem.Elequipotieneconfiguracionproxy,
          Tieneclarodondeconsultarlainformacionqueaplicaalanorma27001:this.editedItem.Tieneclarodondeconsultarlainformacionqueaplicaalanorma27001,
          Sabeustedcomoreportarincidentesdeseguridaddelainformacion:this.editedItem.Sabeustedcomoreportarincidentesdeseguridaddelainformacion,
          CargoResponsable:this.editedItem.CargoResponsable,     
        });
        console.log(info);
        axios
          .post(`${env.endpoint}chequeo/guardar`, 'info='+info)
          .then(res => {
            console.log(res.data.estado);
            if (res.data.estado == "bien") {
              (this.snackbar = true),
              (this.text = "Lista de chequeo registrada satisfactoriamente");
            } else if (res.data.mensaje === "error en la actualizacion") {
              (this.snackbar = true), (this.text = "Error en la actualización");
            }
          });
          this.editedItem = Object.assign({}, this.defaultItem);
      }
    }
};
</script>

<style>
.icon{
  border-radius: 10px !important;
  height:100px;
  width:100px;
  background-color: #111c3d !important;
}

.usuario{
  margin-left: 10px;
  font-size: 20px
}
</style>
