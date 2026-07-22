Interfaces used:

- System.Collections.IEnumerable
  - public interface IEnumerable<out T> :
    System.Collections.IEnumerable where T : allows ref struct
    - public interface ICollection<T> :
      System.Collections.Generic.IEnumerable<T>
      - public interface IList<T> : 
        System.Collections.Generic.ICollection<T>,
        System.Collections.Generic.IEnumerable<T>
      - public interface IDictionary<TKey,TValue> :
        System.Collections.Generic.ICollection<System.Collections.Generic.KeyValuePair<TKey,TValue>>,
        System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<TKey,TValue>>
  - public interface ICollection :
    System.Collections.IEnumerable
    - public interface IList : System.Collections.ICollection
    - public interface IDictionary : System.Collections.ICollection