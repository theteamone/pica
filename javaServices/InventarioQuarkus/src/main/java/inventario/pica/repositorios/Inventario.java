package inventario.pica.repositorios;

import javax.persistence.*;
import inventario.pica.dominio.InventarioDto;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Inventario")
@NamedQueries({
        @NamedQuery(name = "Inventario.findAll", query = "SELECT i FROM Inventario i"),
        @NamedQuery(name = "Inventario.ObtenerPorCodigoTipoPro", query = "SELECT i FROM Inventario i WHERE i.Codigo = :codigo and i.TipoProveedor = :tipoproveedor order by Id desc"),
        @NamedQuery(name = "Inventario.ObtenerPorid", query = "SELECT p FROM Inventario p WHERE p.Id = :Id"),
        @NamedQuery(name = "Inventario.ObtenerPorCodigo", query = "SELECT p FROM Inventario p WHERE p.Codigo = :Codigo")

})
public class Inventario {


    @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id")
    public long Id;
    @Column(name = "Categoria", nullable = false)
    public String Categoria;
    @Column(name = "Codigo", nullable = false)
    public String Codigo;
    @Column(name = "CodigoProveedor", nullable = false)
    public String CodigoProveedor;
    @Column(name = "Descripcion", nullable = false)
    public String Descripcion;
    @Column(name = "Fabricante", nullable = false)
    public String Fabricante;
    @Column(name = "Inventario", nullable = false)
    public int Inventario;
    @Column(name = "Moneda", nullable = false)
    public String Moneda;
    @Column(name = "Nombre", nullable = false)
    public String Nombre;
    @Column(name = "Precio", nullable = false)
    public Double Precio;
    @Column(name = "TipoProveedor", nullable = false)
    public String TipoProveedor;


    public Inventario()
    {

    }

    public Inventario(long _Id, String _Categoria, String _Codigo, String _CodigoProveedor,
                      String _Descripcion,  String _Fabricante,
                      int _Inventario, String _Moneda, String _Nombre,
                      Double _Precio, String _TipoProveedor)
    {
        Id              = _Id;
        Categoria       = _Categoria;
        Codigo          = _Codigo;
        CodigoProveedor = _CodigoProveedor;
        Descripcion     = _Descripcion;
                Fabricante      = _Fabricante;
        Inventario      = _Inventario;
        Moneda          = _Moneda;
        Nombre          = _Nombre;
        Precio          = _Precio;
        TipoProveedor   = _TipoProveedor;

    }

    public long   getId() { return Id; }
    public String getCategoria() { return Categoria; }
    public String getCodigo() { return Codigo; }
    public String getCodigoProveedor() { return CodigoProveedor; }
    public String getDescripcion() { return Descripcion; }
        public String getFabricante() { return Fabricante; }
    public int    getInventario() { return Inventario; }
    public String getMoneda() { return Moneda; }
    public String getNombre() { return Nombre; }
    public Double getPrecio() { return Precio; }
    public String getTipoProveedor() { return TipoProveedor; }


    public void LoadFromDto(InventarioDto inventarioDto)
    {
        Id              = inventarioDto.id             ;
        Categoria       = inventarioDto.categoria      ;
        Codigo          = inventarioDto.codigo         ;
        CodigoProveedor = inventarioDto.codigoProveedor;
        Descripcion     = inventarioDto.descripcion    ;
        Fabricante      = inventarioDto.fabricante     ;
        Inventario      = inventarioDto.inventario     ;
        Moneda          = inventarioDto.moneda         ;
        Nombre          = inventarioDto.nombre         ;
        Precio          = inventarioDto.precio         ;
        TipoProveedor   = inventarioDto.tipoProveedor  ;

    }
    public InventarioDto ToDto()
    {
        InventarioDto response = new InventarioDto();

        response.id              = Id;
        response.categoria       = Categoria;
        response.codigo          = Codigo;
        response.codigoProveedor = CodigoProveedor;
        response.descripcion     = Descripcion;

        response.fabricante      = Fabricante;
        response.inventario      = Inventario;
        response.moneda          = Moneda;
        response.nombre          = Nombre;
        response.precio          = Precio;
        response.tipoProveedor   = TipoProveedor;


        return response;
    }

    public static List<InventarioDto> ToListDto( List<Inventario> originalList )
    {
        List<InventarioDto> newList = new ArrayList<InventarioDto>();
        for( Inventario item : originalList )
        {
            newList.add(item.ToDto());
        }
        return newList;
    }
}
